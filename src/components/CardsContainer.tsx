import { Card } from "./Card";
import { Text } from "./Text";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { api } from "../services/api";
import { EmptyCard } from "./Card/EmptyCard";

interface CardProps{
  id: number;
  question: string;
  answer: string;
  difficulty: number;
}

interface CardsContainer {
  toggleIsAddingCard(): void;
}

export function CardsContainer ({ toggleIsAddingCard }:CardsContainer) {
  const [ cardIndex, setCardIndex ] = useState(0)
  const [ cards, setCards ] = useState<CardProps[]>()
  const [ cardsAmount, setCardsAmount ] = useState(0)

  function handleCallNextCard() {
    if(cards){
      if(cardsAmount-1 > cardIndex ){
        setCardIndex(cardIndex+1)
      }
    }
  }

  function handleCallPreviousCard() {
    if(cards){
      if(cardsAmount-1 > cardIndex ){
        setCardIndex(cardIndex-1)
      }
    }
  }

  
  function deleteCardFromArray(cardId: number) {
    setCards(
      cards?.filter(card => card.id !== cardId)
    )
  }

  async function fetchData() {
    try{
      await api('/cards/available')
        .then(json => {
          setCards(json.data)
          setCardsAmount(json.data.length)
        })

    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()

  },[])

  return (
    <div>    
      { cards?.length ? 
        <>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2 items-center">          
              <button onClick={handleCallPreviousCard} disabled={cardIndex <= 0}>
                <IoIosArrowBack 
                  size='18px' 
                  color={cardIndex > 0 ? 'white' : '#383838'}/
                  >
              </button>
              <Text>{cardIndex+1}/{cardsAmount} </Text> 
              <Text color='medium'>Cartas prontas para revisão</Text>
            </div>
            <button onClick={toggleIsAddingCard} className="
              pl-3 pr-4 
              mr-2
              border border-neutral-700 rounded 
              duration-200 hover:bg-neutral-800
            ">
              <Text color="medium">+ Adicionar card</Text>
            </button>        
          </div>
            <Card 
              deleteCardFromArray={deleteCardFromArray}
              handleCallNextCard={handleCallNextCard}
              card={{ 
                id: cards[cardIndex].id,
                initialAnswerText:cards[cardIndex].answer, 
                initialQuestionText:cards[cardIndex].question
              }}
            /> 
        </>
        : ''
      }  
      { !cards?.length && 
        <div className="flex flex-col items-end gap-2">
          <button onClick={toggleIsAddingCard} className="
            pl-3 pr-4 
            mr-2
            border border-neutral-700 rounded 
            duration-200 hover:bg-neutral-800
            ">
            <Text color="medium">+ Adicionar card</Text>
          </button>         
          <EmptyCard /> 
        </div>
      }        
    </div>
  )
}