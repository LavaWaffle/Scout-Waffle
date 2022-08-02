import { AppShell, Footer, useMantineTheme, Button } from '@mantine/core';
import React, { useState } from 'react'
import { useGameContext, Points, ClimbBar } from '@/context/GameContext';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import type { LaunchStatus, Win, Team } from '@prisma/client';
import LaunchModal from './LaunchModal';
import EndModal from './EndModal';
import { Constants } from "@/Constants";
import UploadModal from './UploadModal';
import { useMediaQuery } from '@mantine/hooks';
import { calculateLaunchPointValue } from '@/utils/calculateLaunchPointValue';
import calculateClimbPointValue from '@/utils/calculateClimbPointValue';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
type props = {
  children: JSX.Element,
}

const Layout: React.FC<props> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useMantineTheme();
  // game context
  const { setGameProperties, appendMarkers, appendRankingPoints } = useGameContext();
  // auto state 
  const [autoOpened, setAutoOpened] = useState<boolean>(false);
  const [autoLaunchOne, setAutoLaunchOne] = useState<LaunchStatus>('GotInUpper');
  const [autoLaunchTwo, setAutoLaunchTwo] = useState<LaunchStatus>('GotInUpper');

  function handleAutoClose() {
    // close modal
    setAutoOpened(false);

    // create points from auto data
    const points: Points = {
      isAuto: true,
      pointType: Constants.LAUNCH_POINT_TYPE,
      pointValue: calculateLaunchPointValue([autoLaunchOne, autoLaunchTwo]),
      launches: {
        create: [
          {
            type: autoLaunchOne,
          },
          {
            type: autoLaunchTwo,
          },
        ]
      }
    }

    // append points to context
    appendMarkers(points);

    // reset modal launch states
    setAutoLaunchOne('GotInUpper');
    setAutoLaunchTwo('GotInUpper');
  }
 
  
  // end game state
  const [endOpened, setEndOpened] = useState<boolean>(false);
  const [endTitle, setEndTitle] = useState<string>('');
  const [cargoRP, setCargoRP] = useState<boolean>(false);
  const [climbBar, setClimbBar] = useState<ClimbBar>('NoClimb');
  const [climbRP, setClimbRP] = useState<boolean>(false);
  const [win, setWin] = useState<Win>('Tie');
  const [ourTeam, setOurTeam] = useState<Team>('Blue');

  // upload state
  const [uploadOpened, setUploadOpened] = useState<boolean>(false);

  function handleEndClose() {
    // close modal
    setEndOpened(false);

    // append ranking points
    // cargo
    appendRankingPoints([
      {
        type: Constants.CARGO_RP_TYPE,
        maxScore: Constants.CARGO_RP_MAX_SCORE,
        minScore: Constants.CARGO_RP_MIN_SCORE,
        numberScore: cargoRP ? 1 : 0,
      },
      {
        type: Constants.CLIMB_RP_TYPE,
        maxScore: Constants.CLIMB_RP_MAX_SCORE,
        minScore: Constants.CLIMB_RP_MIN_SCORE,
        numberScore: climbRP ? 1 : 0,
      }
    ]);
    

    // create points 
    const points: Points = {
      isAuto: false,
      pointType: Constants.CLIMB_POINT_TYPE,
      pointValue: calculateClimbPointValue(climbBar),
      launches: {
        create: [],
      }
    }
    // append points to context
    setTimeout(() => {
      appendMarkers(points);
      showNotification({
        title: 'Climb Points',
        message: 'Climb Points added to ranking points',
        color: 'green',
        icon: <IconCheck />,
      });
    }, 1000);
    

    // set game properties
    setTimeout(() => {
      setGameProperties({
        name: endTitle,
        ourTeam,
        weWin: win,
      });
      showNotification({
        title: 'Set Game Properties',
        message: `name: ${endTitle}, ourTeam: ${ourTeam}, weWin: ${win}`,
        color: 'green',
        icon: <IconCheck />,
      });
    }, 2000)
    
  }

  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        footer={
          <Footer height={60} p="md">
            <div className='flex sm:items-center  justify-between'>   
              <ColorSchemeToggle />
              {/* middle */}
              <div style={{paddingLeft: isMobile === false ? "4.5rem" : "", gap: "2rem"}} >
                <Button 
                  style={{marginTop: '-0.25rem', marginRight: '1rem'}} 
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
              </div>
              {/* right */}
              <div>
                <Button 
                    style={{marginTop: '-0.25rem'}} 
                    variant="outline" 
                    color='pink'
                    onClick={() => setUploadOpened(!uploadOpened)}
                  >
                  Upload
                </Button>
              </div>
              </div>
          </Footer>
        }
      >
        <main>
          {children}
        </main>
        <LaunchModal 
          isOpen={autoOpened}
          onClose={handleAutoClose}
          title="Auto Data"
          launchFuncOne={setAutoLaunchOne}
          currentLaunchOne={autoLaunchOne}
          launchOne={['GotInUpper','GotInLower','BounceOut','MissClose','MissFar']}
          launchFuncTwo={setAutoLaunchTwo}
          currentLaunchTwo={autoLaunchTwo}
          launchTwo={['GotInUpper','GotInLower','BounceOut','MissClose','MissFar','NoLaunch']}
          submitButton={true}
        />
        <EndModal 
          isOpen={endOpened}
          onClose={handleEndClose}
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
          submitButton={true}
        />
        <UploadModal 
          isOpen={uploadOpened}
          onClose={() => setUploadOpened(false)}
        />
      </AppShell>
    </>
  )
}

export default Layout;
