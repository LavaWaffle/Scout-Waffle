import React from 'react'
import WaffleModal from './WaffleModal'
import { Text, Image, useMantineTheme, Group } from "@mantine/core"
import { Launch } from '@/server/db/generated/prisma-client-ts'

type LaunchModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  launchOne: LaunchCardProps[],
  launchTwo: LaunchCardProps[],

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
      <div className='flex gap-8 pt-3 pb-8'>
        {props.launchOne.map((launch, index) => (
          <LaunchCard
            key={`${index} ${launch.launch}`}
            currentLaunch={launch.currentLaunch}
            launch={launch.launch}
            src={launch.src}
            alt={launch.alt}
            onClick={launch.onClick}
          />
        ))}
      </div>
      <SubTitle subTitle='Launch Two '/>
      {/* button wrapper */}
      <div className='flex gap-8 pt-3 pb-8'>
        {props.launchTwo.map((launch, index) => (
          <LaunchCard
            key={`${index} ${launch.launch}`}
            currentLaunch={launch.currentLaunch}
            launch={launch.launch}
            src={launch.src}
            alt={launch.alt}
            onClick={launch.onClick}
          />
        ))}
      </div>
      </>
    </WaffleModal>
  )
}

export default LaunchModal

type SubTitleProps = {
  subTitle: string
}

const SubTitle: React.FC<SubTitleProps> = (props) => {
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
  currentLaunch: Launch,
  launch: Launch,
  src: string,
  alt: string,
  onClick: () => void
}

const LaunchCard: React.FC<LaunchCardProps> = (props) => {
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
        borderColor: props.currentLaunch === props.launch ? 'pink' : theme.colors.gray[1],
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