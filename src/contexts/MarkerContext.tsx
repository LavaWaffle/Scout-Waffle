import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import type { LaunchStatus } from "@prisma/client";
import { Marker } from "react-image-marker";

type MarkerContextProviderProps = {
  children: ReactNode;
}

type MarkerContext = {
  launches: LaunchStatus[];
  setLaunches: Dispatch<SetStateAction<LaunchStatus[]>>;
  markers: Marker[];
  setMarkers: Dispatch<SetStateAction<Marker[]>>;
  getIndexDetails: (index: number) => { marker: Marker | undefined, launch: LaunchStatus | undefined };
  popIndex: (index: number) => void;
  reset: () => void;
  getAllIndexDetails: () => { marker: Marker | undefined, launch: LaunchStatus | undefined }[];
  appendMarker: (marker: Marker, launch: LaunchStatus) => void;
}

const MarkerContext = createContext({} as MarkerContext);

export function useMarkerContext() {
  return useContext(MarkerContext);
}

export function MarkerContextProvider({ children }: MarkerContextProviderProps) {
  const [launches, setLaunches] = useState<LaunchStatus[]>([]);
  const [markers, setMarkers] = useState<Marker[]>([]);

  function getIndexDetails(index: number) {
    const marker = markers[index];
    const launch = launches[index];
    return {
      marker,
      launch,
    };
  }

  function popIndex(index: number) {
    const { marker, launch } = getIndexDetails(index);
    if (marker && launch) {
      setMarkers(curMarkers => curMarkers.filter((_, i) => i !== index));
      setLaunches(curLaunches => curLaunches.filter((_, i) => i !== index));
    }
  }

  function reset() {
    setMarkers([]);
    setLaunches([]);
  }

  function getAllIndexDetails() {
    return Array.from({ length: markers.length }, (_, i) => getIndexDetails(i));
  }

  function appendMarker(marker: Marker, launch: LaunchStatus) {
    setMarkers(m => ([...m, marker]));
    setLaunches(l => ([...l, launch]));
  }

  return (
    <MarkerContext.Provider value={{
      launches,
      setLaunches,
      markers,
      setMarkers,
      getIndexDetails,
      popIndex,
      reset,
      getAllIndexDetails,
      appendMarker,
    }}>
      {children}
    </MarkerContext.Provider>
  );
}