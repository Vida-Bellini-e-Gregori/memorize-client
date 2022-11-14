import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { BsInfoCircle } from 'react-icons/bs' 
import { Tooltip } from "../Tooltip";
import { TextArea } from "./TextArea";
import { DifficultyButtons } from "./DifficultyButtons";
import { EditingButtons } from "./EditingButtons";


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
  const [ lastSavedQuestionText, setlastSavedQuestionText ] = useState(card.initialQuestionText)
  const [ lastSavedAnswerText, setlastSavedAnswerText ] = useState(card.initialAnswerText)

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
    setlastSavedQuestionText(currentQuestionText)
    setlastSavedAnswerText(currentAnswerText)

    setEditingCard(false)
  }

  function handleCancelChanges() {
    setCurrentQuestionText(lastSavedQuestionText)
    setCurrentAnswerText(lastSavedAnswerText)
    setEditingCard(false)
  }

  useEffect(() => {
    setCurrentQuestionText(card.initialQuestionText)
    setCurrentAnswerText(card.initialAnswerText)

  },[card])  

  const textAreaStyle = `
    leading-relaxed
    w-full
    text-neutral-50
    bg-neutral-900
    overflow-visible
    outline-none
    decoration-gray-900
    resize-none
    text-justify
    font-serif
  `

  return (
    <div className={`
      flex flex-col justify-between items-center
      w-[500px] h-[500px]
      md:w-[700px] md:h-[400px]
      px-16 pt-12 pb-10 
      bg-neutral-900 
      rounded-lg border-neutral-800 ${isEditingCard ? 'border-dashed border-4': 'border'} 
      relative
    `}>

      {/* Button to start editting */}
      { (isShowingAnwser && !isEditingCard) &&
        <button className="absolute top-4 right-5 flex" onClick={() => setEditingCard(true)}>
          <Text size="sm" className="text-gray-400 text-sm" >Editar</Text>
        </button>
      }

      {/* Text areas of question and answer */}
      <div className="w-full">

        <TextArea currentText={currentQuestionText} setCurrentText={setCurrentQuestionText} isEditingCard />
        { isShowingAnwser && 
          <>
            <hr className="my-5 border-neutral-500"/>
            <TextArea currentText={currentAnswerText} setCurrentText={setCurrentAnswerText} isEditingCard />
          </>
        }
      </div>

      {/* Reveal answer button */}
      { (!isEditingCard && !isShowingAnwser) &&
        <Button label="Revelar" onClick={handleRevealAnswer}
          className="hover:bg-neutral-300"
        />  
      }

      { (!isEditingCard && isShowingAnwser) &&
        <DifficultyButtons handleSetDifficulty={handleSetDifficulty}/>      
      }
      
      { (isEditingCard && isShowingAnwser) &&
        <EditingButtons handleSaveChanges={handleSaveChanges} handleCancelChanges={handleCancelChanges}/>      
      }


      
    </div>    
  )
}