
import { Text } from "../Text"

export function EmptyCard() {
  return (
    <div className={`
    flex flex-col justify-center items-center
    min-w-[500px] min-h-[500px]
    md:min-w-[700px] md:min-h-[400px]
    px-16 pt-12 pb-10 
    bg-neutral-900 
    rounded-lg border-neutral-800 border
    relative
    gap-5
  `}>
      <Text>Não há nenhum card disponivel agora.</Text>
      <Text>
        Se você realmente estiver muito afim de estudar, 
        dê uma olhada na visualização geral de cards.
      </Text>
  </div>
  )
}