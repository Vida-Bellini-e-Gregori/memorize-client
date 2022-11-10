import { Text } from "../Text";
import { DropDown } from "./DropDown";
import { useDeck } from "../../Context/DeckContext/useDeck";


export function MainFilter() {
  const { subjects } = useDeck()

  return (
    <div className="flex gap-2">
      <Text weight="light">Assunto:</Text>
      { subjects.map(subject => (
        <>
          <DropDown key={subject.id} title={subject.title} />
          <Text > {'-'} </Text>
        </>
      ))

      }
    </div>
  )
}