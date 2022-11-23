import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { BsInfoCircle } from 'react-icons/bs' 
import { Tooltip } from "../Tooltip";
import { TextArea } from "./TextArea";
import { DifficultyButtons } from "./DifficultyButtons";
import { EditingButtons } from "./EditingButtons";
import { api } from "../../services/api";


interface CardProps{
  id: number;
  initialQuestionText: string;
  initialAnswerText: string;
}


interface CardComponentProps{
  card: CardProps;
  handleCallNextCard(): void;
  deleteCardFromArray(cardId: number): void;
}


export function Card({ card, handleCallNextCard, deleteCardFromArray }: CardComponentProps){
  const [ lastSavedQuestionText, setlastSavedQuestionText ] = useState(card.initialQuestionText)
  const [ lastSavedAnswerText, setlastSavedAnswerText ] = useState(card.initialAnswerText)

  const [ currentQuestionText, setCurrentQuestionText ] = useState(card.initialQuestionText)
  const [ currentAnswerText, setCurrentAnswerText ] = useState(card.initialAnswerText)
  const [ isShowingAnwser, setIsShowingAnwser ] = useState(false)
  const [ isEditingCard, setEditingCard ] = useState(false)

  function handleRevealAnswer() {
    setIsShowingAnwser(true)
  }

  async function postDifficulty(difficultyId: number) {
    try{
      await api.patch(`/cards/${card.id}/difficulty/${difficultyId}`)

    }catch(err){
      console.log(err)
    }
  }

  async function handleSetDifficulty(difficultyId: number) {
    await postDifficulty(difficultyId)
    setIsShowingAnwser(false)
    handleCallNextCard()

  }


  async function postChanges() {
    try{
        await api.put(`/cards/${card.id}`, {
          deckId: 1,
          question: currentQuestionText,
          answer: currentAnswerText,
        })

    }catch(err){
      console.log(err)
    }
  }    

  async function handleSaveChanges() {
    postChanges()
    setlastSavedQuestionText(currentQuestionText)
    setlastSavedAnswerText(currentAnswerText)

    setEditingCard(false)
  }

  function handleCancelChanges() {
    setCurrentQuestionText(lastSavedQuestionText)
    setCurrentAnswerText(lastSavedAnswerText)
    setEditingCard(false)
  }

  
  async function deleteCard() {
    try{
      await api.delete(`/cards/${card.id}`)
      deleteCardFromArray(card.id)
      

    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    setCurrentQuestionText(card.initialQuestionText)
    setCurrentAnswerText(card.initialAnswerText)

  },[card])  


  return (
    <div className={`
      flex flex-col justify-between items-center
      min-w-[500px] min-h-[500px]
      md:min-w-[700px] md:min-h-[400px]
      px-16 pt-12 pb-10 
      bg-neutral-900 
      rounded-lg border-neutral-800 ${isEditingCard ? 'border-dashed border-4': 'border'} 
      relative
    `}>

      {/* Button to start editting */}
      { (isShowingAnwser && !isEditingCard) &&
        <div className="absolute top-4 right-5 flex gap-1">
          <button onClick={() => setEditingCard(true)}>
            <Text size="sm" className="text-gray-400 text-sm">Editar</Text>
          </button>
            <Text size="sm" className="text-gray-400 text-sm"> / </Text>
          <button onClick={() => deleteCard()}>
            <Text size="sm" className="text-red-300 opacity-80 transpa text-sm">Excluir</Text>
          </button>

        </div>
      }

      {/* Text areas of question and answer */}
      <div className="w-full mb-10">
        <TextArea
          currentText={currentQuestionText}
          setCurrentText={setCurrentQuestionText}
          isEditingCard={isEditingCard}
        />
        { isShowingAnwser && 
          <>
            <hr className="my-5 border-neutral-800"/>
            <TextArea
              currentText={currentAnswerText}
              setCurrentText={setCurrentAnswerText}
              isEditingCard={isEditingCard}
            />
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