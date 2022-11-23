import { useEffect, useState } from "react"
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { api } from "../../services/api"
import { Difficulty } from "../../Types";
import { Text } from '../Text'


type Card = {
  answer: string;
  question: string;
  lastSeenDate: string;
  difficulty: number
}

interface AllCardsProps{
  toggleIsShowingSideVisualization(): void;
}

const difficultyStyle = new Map<number, string>();
  difficultyStyle.set(Difficulty.EASY, 'bg-green-500/10 border-green-500 hover:bg-green-500/30 ')
  difficultyStyle.set(Difficulty.MEDIUM, 'bg-yellow-500/10 border-yellow-500 hover:bg-yellow-500/30 ')
  difficultyStyle.set(Difficulty.HARD, 'bg-red-500/10 border-red-500 hover:bg-red-500/30 ')

export function AllCardsVisualization({ toggleIsShowingSideVisualization }:AllCardsProps) {
  const [ cards, setCards ] = useState<Card[]>([])

  async function getAllCards() {
    const json = await api.get('/cards')
    const formattedCards = json.data.map((card: Card) => {

      const formattedDate = new Date(card.lastSeenDate).toLocaleDateString()

      return {
        ...card,
        lastSeenDate: formattedDate,
      }
    })
    setCards(formattedCards)
  }

  useEffect(() => {
    getAllCards()
  },[])

  return (
    <div className="
      h-full
      bg-neutral-800
      p-5
      flex flex-col gap-2
      overflow-auto
      duration-200
      relative
    ">         
      <Text className="pt-2 pb-4" color="medium">
        Os cards aparecerão quando devem aparecer de acordo com a dificuldade setada
      </Text>
      { cards.map(card => (
        <div 
          key={card.question}
          className={`
            flex flex-col 
            pl-4 pt-4 pr-4 pb-1
            gap-2
            duration-300
            hover:translate-x-1
            hover:shadow-md
            rounded-md
            border-l-4
            ${difficultyStyle.get(card.difficulty)}
            `}
        >
          <Text className=" line-clamp-2 ">{card.question}</Text>
          <Text color="medium" className="flex justify-end"> {card.lastSeenDate}</Text>
        </div>
        ))
      }
    </div>
  )
}