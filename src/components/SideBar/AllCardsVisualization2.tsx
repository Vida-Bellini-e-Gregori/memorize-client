import { useEffect, useState } from "react"
import { BsInfoCircleFill } from "react-icons/bs";
import { api } from "../../services/api"
import { Difficulty } from "../../Types";
import { Text } from '../Text'
import { Tooltip } from "../Tooltip";


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
  difficultyStyle.set(Difficulty.EASY, 'text-green-500')
  difficultyStyle.set(Difficulty.MEDIUM, 'text-yellow-500 ')
  difficultyStyle.set(Difficulty.HARD, 'text-red-400 ')

export function AllCardsVisualization2({ toggleIsShowingSideVisualization }:AllCardsProps) {
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
      bg-neutral-900
      p-5
      flex flex-col gap-2
      overflow-auto
      duration-200
      relative
      shadow-sidebar
    ">         
      <Text className="pt-2 pb-4" color="medium">
        Cards vermelho reaparecem após 1 dia, amarelos após 2 dias, e verdes apos 4 dias.
      </Text>
      { cards.map(card => (
        <div 
          key={card.question}
          className={`
            flex flex-col 
            duration-300
            hover:translate-x-1
            hover:shadow-md
            hover:bg-neutral-800
            rounded
            border border-neutral-500
            select-none
            
            `}
        >
          <div className="p-4">
            <Text className=" line-clamp-2 ">{card.question}</Text>
          </div>
          <div
            className={`
              flex 
              justify-end
              items-center
              pr-4 pb-2
              gap-2              
            `}
          > 
            <Text color="medium" size="sm">
              {card.lastSeenDate} 
            </Text>
             <Text color="medium">-</Text>
            <Text size="sm" className={`${difficultyStyle.get(card.difficulty)}`}>{'24/11/2022'}</Text>
          </div>
          
        </div>
        ))
      }
    </div>
  )
}