import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import type { Game, Marker as marker, AutoLaunch as autoLaunch } from '@/server/db/generated/prisma-client-ts';

// remove ids from types
interface Marker extends Omit<marker, 'id'|'gameId'> {}
interface AutoLaunch extends Omit<autoLaunch, 'id'|'gameId'> {}

type GameContextProviderProps = {
  children: ReactNode;
}

type ShoppingCartContext = {
  setAutoLaunch: (value: SetStateAction<AutoLaunch | undefined>) => void,
  getAuto: () => AutoLaunch | undefined,
  setMarkers: (value: SetStateAction<Marker[] | undefined>) => void
  getMarkers: () => Marker[] | undefined,
  setGame: (value: SetStateAction<Game | undefined>) => void,
  getGame: () => Game | undefined,
}

const GameContext = createContext({} as ShoppingCartContext);

export function useGameContext() {
  return useContext(GameContext);
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [autoLaunch, setAutoLaunch] = useState<AutoLaunch>();
  const [game, setGame] = useState<Game>();
  const [markers, setMarkers] = useState<Marker[]>();

  function getAuto() {
    return autoLaunch;
  }

  // auto log game context changes
  useEffect(() => {
    console.log(autoLaunch);
  }, [autoLaunch])
  

  function getMarkers() {
    return markers;
  }

  function getGame() {
    return game;
  }

  return (
    <GameContext.Provider value={{
      setAutoLaunch,
      getAuto,
      setMarkers,
      getMarkers,
      setGame,
      getGame
    }}
    >
      {children}
    </GameContext.Provider>
  );
}