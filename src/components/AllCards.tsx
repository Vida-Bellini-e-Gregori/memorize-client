import { Card } from "./Card";
import { useEffect, useState } from "react";

interface CardProps{
  id: number;
  question: string;
  answer: string;
}


export function AllCards () {
  const [ cardIndex, setCardIndex ] = useState(0)
  const [ cards, setcards ] = useState<CardProps[]>()

  function handleCallNextCard() {
    if(cards){
      if(cards?.length < cardIndex ){
        setCardIndex(cardIndex+1)
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      try{
        await fetch('http://192.168.0.115:8000/cards')
        .then(response => response.json())
        .then(json => setcards(json))

      }catch(err){
        console.log(err)
      }

    }
    fetchData()

  },[])



  return (
    <div>    
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