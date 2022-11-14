import { useEffect, useState } from "react";
import { Button } from "../Button";
import { TextArea } from "./TextArea";


interface NewCardProps{
  setIsAddingCard(): void
}



export function NewCard({ setIsAddingCard }:NewCardProps){
  const [ currentQuestionText, setCurrentQuestionText ] = useState('')
  const [ currentAnswerText, setCurrentAnswerText ] = useState('')


  useEffect(() => {
    console.log(currentQuestionText)
  }, [currentQuestionText])



  function handlePostCard() {

    const cardToAdd = {
      deckId: 1,
      question: currentQuestionText,
      answer: currentAnswerText,
      difficulty: 1,
    }

    try{
      fetch('http://192.168.0.111:8000/cards', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cardToAdd)
      })         

    } catch (err) {

    } finally {
      setIsAddingCard()
    }
  }

  return (
    <div className={`
      flex flex-col justify-between items-center
      w-[500px] h-[500px]
      md:w-[700px] md:h-[400px]
      px-16 pt-12 pb-10 
      bg-neutral-900 
      rounded-lg border-neutral-800 border-dashed border-4
      relative
    `}>

      <div className="w-full">
        <div className="relative">
          <span className="
              content-['Pergunta'] 
              absolute 
              -top-6  
              -left-4  
              font-sans
              font-thin
              text-sm
              text-neutral-500           
          ">
            Pergunta
          </span>
          <TextArea 
            isEditingCard
            currentText={currentQuestionText} 
            setCurrentText={setCurrentQuestionText} 
            placeholder="Digite aqui sua pergunta"
            className="placeholder:text-neutral-500"
          ></TextArea>
        </div>
        <hr className="my-5 border-neutral-500"/>
        <div className="relative">
          <span className="
              content-['Pergunta'] 
              absolute 
              -top-6  
              -left-4  
              font-sans
              font-thin
              text-sm
              text-neutral-500           
          ">
            Resposta
          </span>
          <TextArea 
            isEditingCard
            currentText={currentAnswerText} 
            setCurrentText={setCurrentAnswerText} 
          />
        </div>
      </div>


      <Button label="Salvar novo cartão" onClick={handlePostCard}
        className="hover:bg-neutral-300"
      />  

    
    </div>    
  )
}