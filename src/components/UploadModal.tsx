import { Button, Group, Kbd, Text } from "@mantine/core"
import React from "react";
import WaffleModal from "./WaffleModal";
import router from "next/router";

type UploadModalProps = {
  isOpen: boolean,
  onClose: () => void,
}

const UploadModal: React.FC<UploadModalProps> = (props) => {
  function handleSubmit() {
    props.onClose();
    router.push('/push');
  }
  
  return <WaffleModal
    isOpen={props.isOpen}
    onClose={props.onClose}
    title="Upload"
  >
    <div className="space-y-3 pt-2">
      <Text className="text-3xl">
        Click <Kbd className="text-2xl">Submit</Kbd> To Upload The Game Data
      </Text>
      <Text className="text-xl">
        Make sure you have the correct info and are connected to the internet
      </Text>
      <Group position="center" className="pt-2">
        <Button size="xl" variant="outline" color="pink" onClick={handleSubmit}>
          Submit
        </Button>
      </Group>
    </div>
  </WaffleModal>
}

export default UploadModal;