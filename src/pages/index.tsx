import { useInputContext } from "@/contexts/InputContext";
import { useMarkerContext } from "@/contexts/MarkerContext";import { getColorFromLaunchStatus } from "@/utils/getColorFromLaunchStatus";
import { Avatar, Container } from "@mantine/core";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker"

const Home: NextPage = () => {
  const { markers, appendMarker: appendMarkerToMarkerContext } = useMarkerContext();
  const { launch } = useInputContext();

  function handleMarkers(marker: Marker) {
    if (launch !== "Erase") {
      appendMarkerToMarkerContext(marker, launch);
    }
  }
  
  // const { appendMarkers } = useGameContext();

  // function writeLaunch() {
  //   // get latest marker
  //   const latestMarker = markers[markers.length - 1];
  //   // if latest marker is undefined, return
  //   if (!latestMarker) return;

  //   // create point from latest marker
  //   const points: Points = {
  //     isAuto: false,
  //     pointType: Constants.LAUNCH_POINT_TYPE,
  //     pointValue: calculateLaunchPointValue([launch]),
  //     top: latestMarker.top.valueOf(),
  //     left: latestMarker.left.valueOf(),
  //     launches: {
  //       create: [
  //         {
  //           type: launch
  //         }
  //       ]
  //     }
  //   }

  //   // append point to game
  //   appendMarkers(points);
  // }

  return (
    <Container>
      <ImageMarker
        src="/field.png"
        markers={markers}
        extraClass="h-[75%]"
        onAddMarker={handleMarkers}
        markerComponent={CustomMarkerComponent}
      />
    </Container>
  );
};

export default Home;

const CustomMarkerComponent:React.FC<MarkerComponentProps> = (props) => {
  const { getIndexDetails } = useMarkerContext();
  const { launch: markerLaunch } = getIndexDetails(props.itemNumber.valueOf());
  const { launch: currentLaunch } = useInputContext();
  const [color, setColor] = useState<string>();
  const { popIndex } = useMarkerContext();

  useEffect(() => {
    const text = getColorFromLaunchStatus(markerLaunch);
    setColor(text);
  }, [markerLaunch]);

  function handleClick() {
    if (currentLaunch === "Erase") {
      popIndex(props.itemNumber.valueOf());
    }
  }

  return (
    <Avatar
      color={color} 
      radius="xl"
      size="xs"
      className="text-white text-center font-semibold text-[0.75rem]"
      onClick={handleClick}
    >
      {props.itemNumber.valueOf() + 1}
    </Avatar>
  )
}