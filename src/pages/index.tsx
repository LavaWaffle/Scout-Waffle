import { Constants } from "@/Constants";
import { useGameContext, Points } from "@/contexts/GameContext";
import { useInputContext } from "@/contexts/InputContext";
import { calculateLaunchPointValue } from "@/utils/calculateLaunchPointValue";
import { Container, Divider } from "@mantine/core";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker"

const Home: NextPage = () => {
  const [markers, setMarkers] = useState<Marker[]>([]);
  function handleMarkers(marker: Marker) {
    setMarkers([...markers, marker]);
  }

  const { launch } = useInputContext();


  useEffect(() => {
    setTimeout(() => {
      if (markers.length !== 0) {
        writeLaunch();
      };
    }, 50);
  }, [markers]);
  
  const { appendMarkers } = useGameContext();

  function writeLaunch() {
    // get latest marker
    const latestMarker = markers[markers.length - 1];
    // if latest marker is undefined, return
    if (!latestMarker) return;

    // create point from latest marker
    const points: Points = {
      isAuto: false,
      pointType: Constants.LAUNCH_POINT_TYPE,
      pointValue: calculateLaunchPointValue([launch]),
      top: latestMarker.top.valueOf(),
      left: latestMarker.left.valueOf(),
      launches: {
        create: [
          {
            type: launch
          }
        ]
      }
    }

    // append point to game
    appendMarkers(points);
  }

  return (
    <Container>
      <ImageMarker
        src="/field.png"
        markers={markers}
        extraClass="h-[75%]"
        onAddMarker={handleMarkers}
        // TODO MAKE CUSTOM MARKER COMPONENT
        // markerComponent={(props: MarkerComponentProps) => {
          
        // }}
      />
    </Container>
  );
};

export default Home;
