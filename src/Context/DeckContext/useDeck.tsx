import { useContext } from "react"
import { DeckContext } from "."

export function useDeck() {
  return useContext(DeckContext)
}