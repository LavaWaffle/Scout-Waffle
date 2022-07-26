import { Modal, Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'

type WaffleModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  children: JSX.Element
}

const WaffleModal: React.FC<WaffleModalProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useMantineTheme();
  return (
    <Modal
      opened={props.isOpen}
      onClose={props.onClose}
      title={
        <Text 
          className='select-none text-5xl'
        >
          {props.title}
        </Text>}
      centered
      fullScreen={isMobile} 
      size="80%"
      className={theme.colorScheme === 'dark' ? 'bg-dark-700' : 'bg-slate-50'}
      overflow="outside"
      transition='scale-y'
      transitionDuration={250}
      transitionTimingFunction="ease-in-out"
    >
      { props.children }
    </Modal>
  )
}

export default WaffleModal;
