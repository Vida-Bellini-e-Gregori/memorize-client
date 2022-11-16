import { Card } from "./Card";
import { Text } from "./Text";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { api } from "../services/api";

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
  const [ cards, setcards ] = useState<CardProps[]>()
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

  async function fetchData() {
    try{
      await api('/cards')
        .then(json => {
          setcards(json.data)
          console.log('json.data', json.data)
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
      { cards &&
        <Card 
          handleCallNextCard={handleCallNextCard}
          card={{ 
            id: cards[cardIndex].id,
            initialAnswerText:cards[cardIndex].answer, 
            initialQuestionText:cards[cardIndex].question
          }}
        /> 
      }  
      { !cards &&
        <Card 
          handleCallNextCard={handleCallNextCard}
          card={{ 
            id: 0,
            initialQuestionText:'Nenhum Card Cadastrado',
            initialAnswerText:'Não edita isso, dps eu vejo kk', 
          }}
        /> 
      }        
    </div>
  )
}