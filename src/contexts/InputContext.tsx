import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import type { LaunchStatus } from '@prisma/client';

type InputContextProviderProps = {
  children: ReactNode;
}

type InputContext = {
  launch: LaunchStatus;
  setLaunch: Dispatch<SetStateAction<LaunchStatus>>;
}

const InputContext = createContext({} as InputContext);

export function useInputContext() {
  return useContext(InputContext);
}

export function InputContextProvider({ children }: InputContextProviderProps) {
  const [launch, setLaunch] = useState<LaunchStatus>('GotInUpper');
  
  return (
    <InputContext.Provider value={{
      launch,
      setLaunch,
    }}>
      {children}
    </InputContext.Provider>
  )
}
