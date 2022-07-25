import { AppShell, Header, Footer, Text, useMantineTheme, Group, Button } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useGameContext } from '@/context/GameContext';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import type { Launch, ClimbBar, Win, Team } from '@prisma/client';
import LaunchModal from './LaunchModal';
import EndModal from './EndModal';
import { Constants } from "@/Constants";
type props = {
  children: JSX.Element
}

const Layout: React.FC<props> = ({ children }) => {
  const theme = useMantineTheme();
  // game context
  const { setAutoLaunch, setGame } = useGameContext();
  // auto state 
  const [autoOpened, setAutoOpened] = useState<boolean>(false);
  const [autoLaunchOne, setAutoLaunchOne] = useState<Launch>('GotIn');
  const [autoLaunchTwo, setAutoLaunchTwo] = useState<Launch>('GotIn');

  // run function every time autoLaunchOne or autoLaunchTwo changes 
  useEffect(() => {
    // update game context with autoLaunchOne and autoLaunchTwo
    setAutoLaunch({
      launchOne: autoLaunchOne,
      launchTwo: autoLaunchTwo
    })
  }, [autoLaunchOne, autoLaunchTwo]);
  
  // end game state
  const [endOpened, setEndOpened] = useState<boolean>(false);
  const [endTitle, setEndTitle] = useState<string>('');
  const [cargoRP, setCargoRP] = useState<boolean>(false);
  const [climbBar, setClimbBar] = useState<ClimbBar>('NoClimb');
  const [climbRP, setClimbRP] = useState<boolean>(false);
  const [win, setWin] = useState<Win>('Tie');
  const [ourTeam, setOurTeam] = useState<Team>('Blue');

  useEffect(() => {
    // update game context with end state
    setGame({
      name: endTitle,
      tournament: Constants.TOURNAMENT_NAME,
      cargoRP: cargoRP ? 1 : 0,
      climbBar: climbBar,
      climbRP: climbRP ? 1 : 0,
      weWin: win,
      ourTeam: ourTeam
    })
  }, [endOpened, cargoRP, climbBar, climbRP, win, ourTeam]);

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

              <Button 
                style={{marginTop: '-0.25rem'}} 
                variant="outline" 
                color='pink'
                onClick={() => setEndOpened(!endOpened)}
              >
                End Game Data
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
        <EndModal 
          isOpen={endOpened}
          onClose={() => setEndOpened(false)}
          title="End Game Data" 
          gameName={endTitle}
          gameNameFunc={setEndTitle}
          cargoRPFunc={setCargoRP} 
          currentCargoRP={cargoRP} 
          cargoRP={[false, true]}  
          climbFunc={setClimbBar}
          currentClimb={climbBar}
          climb={['NoClimb','Low','Middle','High','Traversal']}        
          climbRPFunc={setClimbRP}
          currentClimbRP={climbRP}
          climbRP={[false, true]}
          winFunc={setWin}
          currentWin={win}
          win={['Win','Tie','Lose']}
          teamFunc={setOurTeam}
          currentTeam={ourTeam}
          team={['Blue','Red']}
        />
      </AppShell>
    </>
  )
}

export default Layout;
