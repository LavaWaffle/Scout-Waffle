import {
  AppShell,
  Container,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import React, { useState } from 'react'
import { ColorSchemeToggle } from './ColorSchemeToggle';

type props = {
  children: JSX.Element
}

function Layout({ children }: props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
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
        // navbar={
        //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
        //     <Text>Application navbar</Text>
        //   </Navbar>
        // }
        footer={
          <Footer height={60} p="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text>hi</Text>
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div className='flex justify-between items-center h-full'>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                
                <Text>Application header</Text>
              </div>
              <ColorSchemeToggle />
            </div>
          </Header>
        }
      >
        <main>
          {children}
        </main>
      </AppShell>
    </>
  )
}

export default Layout