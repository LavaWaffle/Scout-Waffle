import LaunchModal from "@/components/LaunchModal";
import { useGameContext } from "@/context/GameContext";
import { Container } from "@mantine/core";
import { Launch } from "@prisma/client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ImageMarker, { Marker } from "react-image-marker"

const Home: NextPage = (props) => {
  const [markers, setMarkers] = useState<Marker[]>([]);
  function handleMarkers(marker: Marker) {
    setMarkers([...markers, marker]);
  }

  const [launchModal, setLaunchModal] = useState<boolean>(false);
  const [autoLaunchOne, setAutoLaunchOne] = useState<Launch>('GotIn');
  const [autoLaunchTwo, setAutoLaunchTwo] = useState<Launch>('GotIn');
  useEffect(() => {
    setTimeout(() => {
      if (markers.length !== 0) setLaunchModal(true);
    }, 50);
  }, [markers]);
  
  const { getMarkers: getGlobalMarkers, setMarkers: setGlobalMarkers } = useGameContext();

  function handleClose() {
    setLaunchModal(false);
    setAutoLaunchOne('GotIn');
    setAutoLaunchTwo('GotIn');
    const latestMarker = markers[markers.length - 1];
    if (latestMarker?.top === undefined && latestMarker?.left === undefined) return;
    
    const globalMarkers = getGlobalMarkers();
    if (globalMarkers?.length !== 0 && globalMarkers !== undefined) {
      setGlobalMarkers([...globalMarkers, {
        top: latestMarker.top.valueOf(),
        left: latestMarker.left.valueOf(),
        launchOne: autoLaunchOne,
        launchTwo: autoLaunchTwo
      }]);
    } else {
      setGlobalMarkers([{
        top: latestMarker.top.valueOf(),
        left: latestMarker.left.valueOf(),
        launchOne: autoLaunchOne,
        launchTwo: autoLaunchTwo
      }]);
    }
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
        launchFuncOne={setAutoLaunchOne}
        currentLaunchOne={autoLaunchOne}
        launchOne={['GotIn','BounceOut','MissClose','MissFar']}
        launchFuncTwo={setAutoLaunchTwo}
        currentLaunchTwo={autoLaunchTwo}
        launchTwo={['GotIn','BounceOut','MissClose','MissFar','NoLaunch']}
        submitButton={true}
      />
    </Container>
  );
};

export default Home;
