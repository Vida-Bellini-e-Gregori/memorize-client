import GoogleProvider from "next-auth/providers/google";
import { createContext, ReactNode } from "react";


// providers: [
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   })
// ]

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

export const DeckContext = createContext({})

export function DeckContextProvider({ children }:DeckContextProviderProps) {
  return(
    <DeckContext.Provider value={{  }}>
      {children}
    </DeckContext.Provider>
  )
}