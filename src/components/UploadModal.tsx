import { Button, Group, Kbd, Text } from "@mantine/core"
import React from "react";
import WaffleModal from "./WaffleModal";
import { trpc } from "@/utils/trpc";
import { Points, useGameContext } from "@/contexts/GameContext";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { useMarkerContext } from "@/contexts/MarkerContext";
import { Constants } from "@/Constants";
import { calculateLaunchPointValue } from "@/utils/calculateLaunchPointValue";

type UploadModalProps = {
  isOpen: boolean,
  onClose: () => void,
}

const UploadModal: React.FC<UploadModalProps> = (props) => {
  const { getGame, appendMarkers } = useGameContext();
  const { mutate } = trpc.useMutation("scout.push");
  const { markers, launches } = useMarkerContext();

  function handleSubmit() {
    const game = getGame();


    markers.forEach((marker, index) => {
      const launch = launches[index];
      if (marker === undefined || launch === undefined) return;
      const point: Points = {
        isAuto: false,
        pointType: Constants.LAUNCH_POINT_TYPE,
        pointValue: calculateLaunchPointValue([launch]),
        top: marker.top.valueOf(),
        left: marker.left.valueOf(),
        launches: {
          create: [{type: launch}] 
        }  
      }

      appendMarkers(point);
    })

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