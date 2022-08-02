import LaunchModal from "@/components/LaunchModal";
import { Constants } from "@/Constants";
import { useGameContext, Points } from "@/context/GameContext";
import { calculateLaunchPointValue } from "@/utils/calculateLaunchPointValue";
import { Container } from "@mantine/core";
import type { LaunchStatus } from "@prisma/client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ImageMarker, { Marker } from "react-image-marker"

const Home: NextPage = (props) => {
  const [markers, setMarkers] = useState<Marker[]>([]);
  function handleMarkers(marker: Marker) {
    setMarkers([...markers, marker]);
  }

  const [launchModal, setLaunchModal] = useState<boolean>(false);
  const [launchOne, setLaunchOne] = useState<LaunchStatus>('GotInUpper');
  const [launchTwo, setLaunchTwo] = useState<LaunchStatus>('GotInUpper');
  useEffect(() => {
    setTimeout(() => {
      if (markers.length !== 0) setLaunchModal(true);
    }, 50);
  }, [markers]);
  
  const { appendMarkers } = useGameContext();

  function handleClose() {
    // close modal
    setLaunchModal(false);
    
    // get latest marker
    const latestMarker = markers[markers.length - 1];
    // if latest marker is undefined, return
    if (latestMarker?.top === undefined && latestMarker?.left === undefined) return;
    
    // create points from latest marker
    const points: Points = {
      isAuto: false,
      pointType: Constants.LAUNCH_POINT_TYPE,
      pointValue: calculateLaunchPointValue([launchOne, launchTwo]),
      top: latestMarker.top.valueOf(),
      left: latestMarker.left.valueOf(),
      launches: {
        create: [
          {
            type: launchOne,
          },
          {
            type: launchTwo,
          },
        ]
      }
    }
    // append points to context
    appendMarkers(points);

    // reset modal launch states
    setLaunchOne('GotInUpper');
    setLaunchTwo('GotInUpper');
  }

  return (
    <Container>
      <ImageMarker
        src="/field.png"
        markers={markers}
        extraClass="h-[75%]"
        onAddMarker={handleMarkers}
      />
      <LaunchModal 
        isOpen={launchModal}
        onClose={handleClose}
        title="Launch Data"
        launchFuncOne={setLaunchOne}
        currentLaunchOne={launchOne}
        launchOne={['GotInUpper','GotInLower','BounceOut','MissClose','MissFar']}
        launchFuncTwo={setLaunchTwo}
        currentLaunchTwo={launchTwo}
        launchTwo={['GotInUpper','GotInLower','BounceOut','MissClose','MissFar','NoLaunch']}
        submitButton={true}
      />
    </Container>
  );
};

export default Home;
