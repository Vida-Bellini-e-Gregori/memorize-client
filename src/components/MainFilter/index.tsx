import { Text } from "../Text";
import { DropDownS } from "./DropDownS";
import { useDeck } from "../../Context/DeckContext/useDeck";

export function MainFilter() {
  
  const subjects = [
    {id: 1, name: 'Portugues'},
    {id: 2, name: 'Geografia'},
    {id: 3, name: 'Matemática', subjects: [
      {id: 31, name: 'Funções'},
      {id: 32, name: 'Zap'},
      {id: 33, name: 'Bitter'},
    ]},
  ]

  return (
    <div className="flex gap-2">
      <Text weight="light" className="text-neutral-400">Assunto:</Text>
      <DropDownS subjects={subjects}/> 
    </div>
  )
}