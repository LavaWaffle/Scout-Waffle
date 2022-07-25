import { AppShell, Header, Footer, Text, useMantineTheme, Group, Button, Modal, Image, MantineTheme } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useGameContext } from '@/context/GameContext';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import type { Launch } from '@/server/db/generated/prisma-client-ts';

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
        <Modal
          opened={autoOpened}
          onClose={() => setAutoOpened(false)}
          title={
            <Text 
              className='select-none text-5xl'
            >
              Auto Data
            </Text>}
          centered
          size="auto"
          overflow="outside"
          transition='scale-y'
          transitionDuration={250}
          transitionTimingFunction="ease-in-out"
        >
          {/* Launch One */}
          <Text
            className='text-3xl pt-2'
            weight="bold"
            style={{
              borderColor: 'gray',
              borderWidth: '0',
              borderTopWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            Launch One
          </Text>
          <div 
            className='flex gap-8 pt-3 pb-8'
          >
            <LaunchCard 
              currentLaunch={autoLaunchOne}
              launch="GotIn"
              src="/launches/got in.svg"
              alt="Got In"
              onClick={() => setAutoLaunchOne('GotIn')}
            />
            <LaunchCard
              currentLaunch={autoLaunchOne}
              launch="BounceOut"
              src="/launches/bounce out.svg"
              alt="Bounce Out"
              onClick={() => setAutoLaunchOne('BounceOut')}
            />
            <LaunchCard
              currentLaunch={autoLaunchOne}
              launch="MissClose"
              src="/launches/miss close.svg"
              alt="Miss Close"
              onClick={() => setAutoLaunchOne('MissClose')}
            />
            <LaunchCard
              currentLaunch={autoLaunchOne}
              launch="MissFar"
              src="/launches/miss far.svg"
              alt="Miss Far"
              onClick={() => setAutoLaunchOne('MissFar')}
            />
            <LaunchCard
              currentLaunch={autoLaunchOne}
              launch="NoLaunch"
              src="/launches/na.svg"
              alt="No Launch"
              onClick={() => setAutoLaunchOne('NoLaunch')}
            />
          </div>

          {/* LAUNCH TWO */}
          <Text
            className='text-3xl pt-2'
            weight="bold"
            style={{
              borderColor: 'gray',
              borderWidth: '0',
              borderTopWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            Launch Two
          </Text>
          <div 
            className='flex gap-8 pt-3'
          >
            <LaunchCard 
              currentLaunch={autoLaunchTwo}
              launch="GotIn"
              src="/launches/got in.svg"
              alt="Got In"
              onClick={() => setAutoLaunchTwo('GotIn')}
            />
            <LaunchCard
              currentLaunch={autoLaunchTwo}
              launch="BounceOut"
              src="/launches/bounce out.svg"
              alt="Bounce Out"
              onClick={() => setAutoLaunchTwo('BounceOut')}
            />
            <LaunchCard
              currentLaunch={autoLaunchTwo}
              launch="MissClose"
              src="/launches/miss close.svg"
              alt="Miss Close"
              onClick={() => setAutoLaunchTwo('MissClose')}
            />
            <LaunchCard
              currentLaunch={autoLaunchTwo}
              launch="MissFar"
              src="/launches/miss far.svg"
              alt="Miss Far"
              onClick={() => setAutoLaunchTwo('MissFar')}
            />
            <LaunchCard
              currentLaunch={autoLaunchTwo}
              launch="NoLaunch"
              src="/launches/na.svg"
              alt="No Launch"
              onClick={() => setAutoLaunchTwo('NoLaunch')}
            />
          </div>
        </Modal>
      </AppShell>
    </>
  )
}

export default Layout;

type launchCardProps = {
  currentLaunch: Launch,
  launch: Launch,
  src: string,
  alt: string,
  onClick: () => void
}

const LaunchCard: React.FC<launchCardProps> = (props) => {
  const theme = useMantineTheme();
  return (
    <Group
      style={{
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: '0.65rem 1rem',
        borderRadius: '2rem',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: props.currentLaunch === props.launch ? 'pink' : theme.colors.gray[1],
      }}
      onClick={props.onClick}
    >
      <Text 
        size='lg' 
        style={{color: 
          // if current focused: pink
          props.currentLaunch === props.launch ? 
            'pink' : 
          // elif not current focused: follow default light/dark
          theme.colorScheme === 'dark' ? 
          'white' : 
            'black'
        }}
      >
        {props.alt}
      </Text>
      <Image
        src={props.src}
        width={100}
        className='aspect-square'
        alt={props.alt}
      />
    </Group>
  )
}