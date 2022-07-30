import { createContext, ReactNode, useContext, useState } from "react";
import type { Game as game, RankingPoint as rankingPoint, Points as points, Launch as launch } from '@prisma/client';
import { Constants } from "@/Constants";

// types
interface RankingPoint extends Omit<rankingPoint, 'id'|'gameId'> {}
interface PointsInt extends Omit<points, 'id'|'gameId'|'top'|'left'> {}
export type Points = PointsInt & {
  top?: number;
  left?: number;
  launches: { create: Launch[] };
}
interface Launch extends Omit<launch, 'id'|'markerId'> {}
interface GameInt extends Omit<game, 'id'|'createdAt'|'updatedAt'|'version'> {}
type Game = GameInt & {
  markers: { create: Points[] };
  rankingPoints: { create: RankingPoint[] };
}

// custom types
export type ClimbBar = 'NoClimb'|'Low'|'Middle'|'High'|'Traversal';

type GameContextProviderProps = {
  children: ReactNode;
}

type ShoppingCartContext = {
  getGame: () => Game | undefined,
  setGameProperties: (properties: Partial<Game>) => void,
  appendRankingPoints: (value: RankingPoint[]) => void,
  getRankingPoints: () => RankingPoint[],
  appendMarkers: (value: Points) => void,
  getMarkers: () => Points[] | undefined,

}

const GameContext = createContext({} as ShoppingCartContext);

export function useGameContext() {
  return useContext(GameContext);
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [game, setGame] = useState<Game>();

  const defaultValues: Game = {
    name: Constants.TEMP_GAME_NAME,
    tournament: Constants.TOURNAMENT_NAME,
    markers: {
      create: [],
    },
    rankingPoints: {
      create: [],
    },
    weWin: "Win",
    ourTeam: "Blue",
  }

  function getGame() {
    return game;
  }

  function setGameProperties(properties: Partial<Game>) {
    setGame(prevInputs => {
      if (prevInputs !== undefined) {
        return {
          ...prevInputs,
          ...properties,
        }
      } else {
        return {
          ...defaultValues,
          ...properties,
        }
      }
    });
  }

  function getRankingPoints() {
    if (game !== undefined) {
      return game.rankingPoints.create;
    } else {
      return [];
    }
  }

  function appendRankingPoints(value: RankingPoint[]) {
    setGame(prevInputs => {
      if (prevInputs !== undefined) {
        return {
          ...prevInputs,
          rankingPoints: {
            create: [...prevInputs.rankingPoints.create, ...value ],
          },
        }
      } else {
        return {
          ...defaultValues,
          rankingPoints: {
            create: [...value ],
          },
        }
      }
    })
  }

  function getMarkers() {
    if (game !== undefined) {
      return game.markers.create;
    } else {
      return [];
    }
  }

  function appendMarkers(value: Points) {
    setGame(prevInputs => {
      if (prevInputs !== undefined) {
      return {
        ...prevInputs,
        markers: {
          create: [...prevInputs.markers.create, value],
        },
      }} else {
      return {
        ...defaultValues,
        markers: {
          create: [...defaultValues.markers.create, value],
        },
      }}
    });
  }

  return (
    <GameContext.Provider value={{
      getGame,
      setGameProperties,
      appendRankingPoints,
      getRankingPoints,
      appendMarkers,
      getMarkers,
    }}
    >
      {children}
    </GameContext.Provider>
  )
};