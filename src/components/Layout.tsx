import { AppShell, Header, Footer, Text, useMantineTheme, Group, Button, Modal, Image, MantineTheme } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useGameContext } from '@/context/GameContext';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import type { Launch } from '@/server/db/generated/prisma-client-ts';
import LaunchModal from './LaunchModal';

type props = {
  children: JSX.Element
}

const Layout: React.FC<props> = ({ children }) => {
  const theme = useMantineTheme();
  const [autoOpened, setAutoOpened] = useState<boolean>(false);
  const [autoLaunchOne, setAutoLaunchOne] = useState<Launch>('GotIn');
  const [autoLaunchTwo, setAutoLaunchTwo] = useState<Launch>('GotIn');
  const { setAutoLaunch } = useGameContext();

  // run function every time autoLaunchOne or autoLaunchTwo changes 
  useEffect(() => {
    // update game context with autoLaunchOne and autoLaunchTwo
    setAutoLaunch({
      launchOne: autoLaunchOne,
      launchTwo: autoLaunchTwo
    })
  }, [autoLaunchOne, autoLaunchTwo]);
  

  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        footer={
          <Footer height={60} p="md">
            <Group position='center' align='center'>
              <Button 
                style={{marginTop: '-0.25rem'}} 
                variant="outline" 
                color='pink'
                onClick={() => setAutoOpened(!autoOpened)}
              >
                Auto Data
              </Button>
            </Group>
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%',}}>  
              <Text>Application header</Text>
              
              <ColorSchemeToggle />
            </div>
          </Header>
        }
      >
        <main>
          {children}
        </main>
        <LaunchModal 
          isOpen={autoOpened}
          onClose={() => setAutoOpened(false)}
          title="Auto Data"
          launchFuncOne={setAutoLaunchOne}
          currentLaunchOne={autoLaunchOne}
          launchOne={['GotIn','BounceOut','MissClose','MissFar']}
          launchFuncTwo={setAutoLaunchTwo}
          currentLaunchTwo={autoLaunchTwo}
          launchTwo={['GotIn','BounceOut','MissClose','MissFar']}
        />
      </AppShell>
    </>
  )
}

export default Layout;
