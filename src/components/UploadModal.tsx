import { Button, Group, Kbd, Text } from "@mantine/core"
import React from "react";
import WaffleModal from "./WaffleModal";
import { trpc } from "@/utils/trpc";
import { useGameContext } from "@/contexts/GameContext";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";

type UploadModalProps = {
  isOpen: boolean,
  onClose: () => void,
}

const UploadModal: React.FC<UploadModalProps> = (props) => {
  const { getGame } = useGameContext();
  const { mutate } = trpc.useMutation("scout.push");

  function handleSubmit() {
    const game = getGame();

    if (game === undefined) {
      showNotification({
        title: 'Error uploading',
        message: 'Game undefined, make sure you added points, auto, and end game data!',
        color: 'red',
        icon: <IconX />,
      })
      return;
    }
    mutate(game);

    setTimeout(() => {
      props.onClose()
      showNotification({
        title: 'Successfully uploaded',
        message: 'Your game has been uploaded!',
        color: 'green',
        icon: <IconCheck />,
      })
    }, 1000);
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