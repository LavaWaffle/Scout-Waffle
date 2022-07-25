import { Modal, Text } from '@mantine/core'
import React from 'react'

type WaffleModalProps = {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  children: JSX.Element
}

const WaffleModal: React.FC<WaffleModalProps> = (props) => {
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
      size="80%"
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
