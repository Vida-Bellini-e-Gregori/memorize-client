import { Card } from "./Card";
import { Text } from "./Text";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io'

interface CardProps{
  id: number;
  question: string;
  answer: string;
}


export function AllCards () {
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
      await fetch('http://192.168.0.111:8000/cards')
      .then(response => response.json())
      .then(json => {
        setcards(json)
        console.log('json', json)
        setCardsAmount(json.length)
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
      <div className="flex gap-2 items-center">
        <button onClick={handleCallPreviousCard}>
          <IoIosArrowBack 
            size='18px' 
            color={cardIndex > 0 ? 'white' : '#383838'}/
          >
        </button>
        <Text>{cardIndex+1}/{cardsAmount} </Text> 
        <Text className="text-neutral-500">cartas prontas para revisão</Text>
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