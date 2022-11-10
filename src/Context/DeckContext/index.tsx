import { createContext, ReactNode } from "react";
import subjects from '../../../subjects.json'

export type Subject = {
  id: number;
  title: string;
  questions: {
      id: number;
      question: string;
      answer: string;
  }[];
  subjects?: Subject[]
}

interface DeckContextProps {
  subjects: Subject[]
}

interface DeckContextProviderProps {
  children: ReactNode
}

export const DeckContext = createContext({} as DeckContextProps)

export function DeckContextProvider({ children }:DeckContextProviderProps) {
  return(
    <DeckContext.Provider value={{ subjects }}>
      {children}
    </DeckContext.Provider>
  )
}