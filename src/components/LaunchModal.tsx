import React from 'react'
import WaffleModal from './WaffleModal'
import { Text, Image, useMantineTheme, Group, Button, ScrollArea } from "@mantine/core"
import type { LaunchStatus } from '@prisma/client'

type LaunchModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  launchFuncOne: (launch: LaunchStatus) => void,
  currentLaunchOne: LaunchStatus,
  launchOne: LaunchStatus[],
  launchFuncTwo: (launch: LaunchStatus) => void,
  currentLaunchTwo: LaunchStatus,
  launchTwo: LaunchStatus[],
  submitButton: boolean,
}

const LaunchModal: React.FC<LaunchModalProps> = (props) => {
  return (
    <WaffleModal 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      title={props.title}   
    >
      <>
      <SubTitle subTitle='Launch One '/>
      {/* button wrapper */}
      <ScrollArea>
        <div className='flex flex-nowrap whitespace-nowrap gap-8 pt-3 pb-8'>
          {props.launchOne.map((launch, index) => (
            <LaunchCard
              key={`${index} ${launch}`}
              currentLaunch={props.currentLaunchOne}
              launch={launch}
              src={`/launches/${launch.replace(/[A-Z]/g, ' $&').trim().toLowerCase()}.svg`}
              alt={launch.replace(/[A-Z]/g, ' $&').trim()}
              onClick={() => props.launchFuncOne(launch)}
            />
          ))}
        </div>
      </ScrollArea>
      <SubTitle subTitle='Launch Two '/>
      {/* button wrapper */}
      <ScrollArea>
        <div className='flex gap-8 pt-3 pb-8'>
          {props.launchTwo.map((launch, index) => (
            <LaunchCard
              key={`${index} ${launch}`}
              currentLaunch={props.currentLaunchTwo}
              launch={launch}
              src={`/launches/${launch.replace(/[A-Z]/g, ' $&').trim().toLowerCase()}.svg`}
              alt={launch.replace(/[A-Z]/g, ' $&').trim()}
              onClick={() => props.launchFuncTwo(launch)}
            />
          ))}
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

export default LaunchModal

type SubTitleProps = {
  subTitle: string
}

export const SubTitle: React.FC<SubTitleProps> = (props) => {
  return (
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
      {props.subTitle}
    </Text>
  )
}

type LaunchCardProps = {
  currentLaunch: LaunchStatus,
  launch: LaunchStatus,
  src: string,
  alt: string,
  onClick: () => void
}

export const LaunchCard: React.FC<LaunchCardProps> = (props) => {
  const theme = useMantineTheme();
  return (
    <Group
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: '0.35rem',
        borderRadius: '2rem',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: props.currentLaunch === props.launch ? 'pink' : theme.colors.gray[1],
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={props.onClick}
    >
      <Text 
        size='lg' 
        weight='600'
        style={{color: 
          // if current focused: pink
          props.currentLaunch === props.launch ? 
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