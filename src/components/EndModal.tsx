import { useMantineTheme, Group, Text, Image, TextInput, ScrollArea, Button } from '@mantine/core'
import React from 'react'
import { SubTitle } from './LaunchModal'
import WaffleModal from './WaffleModal'
import type { Win, Team } from '@prisma/client';
import type { ClimbBar } from '@/context/GameContext';

type EndModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  gameNameFunc: (value: string) => void,
  gameName: string,
  cargoRPFunc: (cargoRP: boolean) => void,
  currentCargoRP: boolean,
  cargoRP: boolean[],
  climbFunc: (climb: ClimbBar) => void,
  currentClimb: ClimbBar,
  climb: ClimbBar[],
  climbRPFunc: (climbRP: boolean) => void,
  currentClimbRP: boolean,
  climbRP: boolean[],
  winFunc: (win: Win) => void,
  currentWin: Win,
  win: Win[],
  teamFunc: (team: Team) => void,
  currentTeam: Team,
  team: Team[],
  submitButton: boolean,
}

const EndModal: React.FC<EndModalProps> = (props) => {
  return (
    <WaffleModal 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      title={props.title}   
    >
      <>
        <SubTitle subTitle='Game ID/Name' />
        <TextInput
          placeholder='Game ID/Name'
          value={props.gameName}
          onChange={(e) => props.gameNameFunc(e.currentTarget.value)}
          className='pb-5 pt-3'
          size="lg"
          color='pink'
        />
        <SubTitle subTitle='Cargo RP'/>
        {/* wrapper */}
        <ScrollArea>
          <div className='flex gap-8 pt-3 pb-8'>
          {props.cargoRP.map((cargoRP, index) => {
            return (
              <Card<boolean>
                key={`${index} ${cargoRP}`}
                currentThing={props.currentCargoRP}
                thing={cargoRP}
                src={`/end/${cargoRP ? 'true' : 'false'}.svg`}
                alt={cargoRP ? '1' : '0'}
                onClick={() => props.cargoRPFunc(cargoRP)}
              />
            )
          })}
          </div>
        </ScrollArea>

        <SubTitle subTitle='Climb Bar'/>
        {/* wrapper */}
        <ScrollArea>
          <div className='flex gap-8 pt-3 pb-8'>
          {props.climb.map((climb, index) => {
            return (
              <Card<ClimbBar>
                key={`${index} ${climb}`}
                currentThing={props.currentClimb}
                thing={climb}
                src={`/end/climb/${climb.replace(/[A-Z]/g, ' $&').trim().toLowerCase()}.svg`}
                alt={climb.replace(/[A-Z]/g, ' $&').trim()}
                onClick={() => props.climbFunc(climb)}
              />
            )
          })}
          </div>
        </ScrollArea>

        <SubTitle subTitle='Climb RP'/>
        {/* wrapper */}
        <ScrollArea>
          <div className='flex gap-8 pt-3 pb-8'>
          {props.climbRP.map((climbRP, index) => {
            return (
              <Card<boolean>
                key={`${index} ${climbRP}`}
                currentThing={props.currentClimbRP}
                thing={climbRP}
                src={`/end/${climbRP ? 'true' : 'false'}.svg`}
                alt={climbRP ? '1' : '0'}
                onClick={() => props.climbRPFunc(climbRP)}
              />
            )
          })}
          </div>
        </ScrollArea>

        <SubTitle subTitle='Win' />
        {/* wrapper */}
        <ScrollArea>
          <div className='flex gap-8 pt-3 pb-8'>
          {props.win.map((win, index) => {
            return (
              <Card<Win>
                key={`${index} ${win}`}
                currentThing={props.currentWin}
                thing={win}
                src={`/end/win/${win.toLowerCase()}.svg`}
                alt={win}
                onClick={() => props.winFunc(win)}
              />
            )
          })}
          </div>
        </ScrollArea>

        <SubTitle subTitle='Alliance' />
        {/* wrapper */}
        <ScrollArea>
          <div className='flex gap-8 pt-3 pb-8'>
          {props.team.map((team, index) => {
            return (
              <Card<Team>
                key={`${index} ${team}`}
                currentThing={props.currentTeam}
                thing={team}
                src={`/end/${team.toLowerCase()}.svg`}
                alt={team}
                onClick={() => props.teamFunc(team)}
              />
            )
          })}
          </div>
        </ScrollArea>
        {/* submit button */}
        {props.submitButton && (
          <Group position='center'>
            <Button variant="outline" color="pink" size="md" onClick={props.onClose}>Submit</Button>
          </Group>
        )}
      </>
    </WaffleModal>
  )
}

export default EndModal;

type CardProps<T> = {
  currentThing: T,
  thing: T,
  src: string,
  alt: string,
  onClick: () => void
}

const Card = <T extends unknown>(props: CardProps<T>) => {
  const theme = useMantineTheme();
  return (
    <Group
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: '0.65rem 1rem',
        borderRadius: '2rem',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: props.currentThing === props.thing ? 'pink' : theme.colors.gray[1],
        cursor: 'pointer',
      }}
      onClick={props.onClick}
    >
      <Text 
        size='lg' 
        weight='600'
        style={{color: 
          // if current focused: pink
          props.currentThing === props.thing ? 
            'pink' : 
          // elif not current focused: follow default light/dark
          theme.colorScheme === 'dark' ? 
          'white' : 'black',
          userSelect: 'none',
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