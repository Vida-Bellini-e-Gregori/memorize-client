import { useEffect, useState } from "react";
import { Button } from "../Button";
import { TextArea } from "./TextArea";
import { Text } from "../Text";


interface NewCardProps{
  toggleIsAddingCard(): void
}


export function NewCard({ toggleIsAddingCard }:NewCardProps){
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
      toggleIsAddingCard()
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Text color='medium' className="mb-2">CRIANDO NOVO CARD</Text>
      <div className={`
        flex flex-col justify-between items-center
        w-[500px] h-[500px]
        md:w-[700px] md:h-[400px]
        px-16 pt-12 pb-10 
        bg-neutral-900 
        rounded-lg border-neutral-800 border-dashed border-4
        relative
      `}>

        <button className="absolute top-2 right-4" onClick={toggleIsAddingCard}>
          <Text color="medium" className="hover:text-neutral-50">X</Text>
        </button>

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
          <div className="relative flex mt-8">
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
              placeholder="Digite aqui sua resposta"
              className="placeholder:text-neutral-500"
            />
          </div>
        </div>


        <Button label="Salvar novo cartão" onClick={handlePostCard}
          className="hover:bg-neutral-300"
        />  

      
      </div>    
    </div>
  )
}