import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { BsInfoCircle } from 'react-icons/bs' 
import { Tooltip } from "../Tooltip";
import { TextArea } from "./TextArea";
import { DifficultyButtons } from "./DifficultyButtons";


interface CardProps{
  id: number;
  initialQuestionText: string;
  initialAnswerText: string;
}


interface CardComponentProps{
  card: CardProps;
  handleCallNextCard(): void;
}


export function Card({ card, handleCallNextCard }: CardComponentProps){
  const [ currentQuestionText, setCurrentQuestionText ] = useState(card.initialQuestionText)
  const [ currentAnswerText, setCurrentAnswerText ] = useState(card.initialAnswerText)
  const [ isShowingAnwser, setIsShowingAnwser ] = useState(false)
  const [ isEditingCard, setEditingCard ] = useState(false)

  function handleRevealAnswer() {
    setIsShowingAnwser(true)
  }

  function handleSetDifficulty() {
    handleCallNextCard()
    setIsShowingAnwser(false)
    console.log(card)
  }

  function handleSaveChanges() {
    console.log('initialQuestionText', card.initialQuestionText)
    setEditingCard(false)
  }

  function handleCancelChanges() {
    setCurrentAnswerText(card.initialAnswerText)
    setCurrentQuestionText(card.initialQuestionText)
    setEditingCard(false)
  }

  useEffect(() => {
    setCurrentQuestionText(card.initialQuestionText)
    setCurrentAnswerText(card.initialAnswerText)

  },[card])  

  return (
    <div className={`
      flex flex-col justify-between items-center
      w-[500px] h-[500px]
      md:w-[700px] md:h-[400px]
      px-16 pt-12 pb-10 
      bg-neutral-900 
      border rounded-lg border-neutral-800 ${isEditingCard && 'border-dashed '} border-4
      relative
    `}>

      { (isShowingAnwser && !isEditingCard) &&
        <button className="absolute top-4 right-5 flex" onClick={() => setEditingCard(true)}>
          <Text size="sm" className="text-gray-400 text-sm" >Editar</Text>
        </button>
      }

      <div className="w-full">
        <TextArea currentText={currentQuestionText} setCurrentText={setCurrentQuestionText} isEditingCard/>
        { isShowingAnwser && 
          <>
            <hr className="my-5 border-neutral-500"/>
            <TextArea currentText={currentAnswerText} setCurrentText={setCurrentAnswerText} isEditingCard/>
          </>
        }
      </div>

        { (!isEditingCard && !isShowingAnwser) &&
          <Button label="Revelar" onClick={handleRevealAnswer}
            className="hover:bg-neutral-300"
          />  
        }

        {/* Difficulty buttons */}
        { (!isEditingCard && isShowingAnwser) &&
          <DifficultyButtons handleSetDifficulty={handleSetDifficulty}/>      
        }
        
        {/* Editing buttons */}
        { (isEditingCard && isShowingAnwser) &&
          <div className="flex gap-5">
            <Button 
              label="Salvar alterações" 
              onClick={() => handleSaveChanges()} 
              className="hover:bg-neutral-300"
            />
            <Button 
              label="Cancelar edição" 
              onClick={() => handleCancelChanges()} 
              color='bg-red-500'
              className="hover:bg-red-600"
            />      
          </div>        
        }


      
    </div>    
  )
}