import { useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { BsInfoCircle } from 'react-icons/bs' 
import { Tooltip } from "../Tooltip";

export function Card(){
  const [ initialQuestionText, setInitialQuestionText ] = useState('Qual nome do osso do braço que parece com o nome de uma tecnologia de transimissão de audio?')
  const [ initialAnswerText, setInitialAnswerText ] = useState('Rádio')

  const [ questionText, setQuestionText ] = useState(initialQuestionText)
  const [ answerText, setAnswerText ] = useState(initialAnswerText)
  const [ isShowingAnwser, setIsShowingAnwser ] = useState(false)
  const [ isEditingCard, setEditingCard ] = useState(false)

  function handleRevealAnswer() {
    setIsShowingAnwser(true)
  }

  function handleSetDifficulty() {
    setIsShowingAnwser(false)
  }

  function handleSaveChanges() {
    setInitialQuestionText(questionText)
    setInitialAnswerText(answerText)
    console.log('initialQuestionText', initialQuestionText)
    setEditingCard(false)
  }

  function handleCancelChanges() {
    setAnswerText(initialAnswerText)
    setQuestionText(initialQuestionText)
    setEditingCard(false)
  }

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
      p-16 pb-10 
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
        <div role={'textbox'} contentEditable={isEditingCard}
          onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setQuestionText(e.target.innerText)}
          className={textAreaStyle} 
        >{questionText}</div>
        { isShowingAnwser && 
          <>
            <hr className="my-5 border-neutral-500"/>
            <div role={'textbox'} contentEditable={isEditingCard}
              onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setAnswerText(e.target.innerText)}
              className={textAreaStyle} 
            >{answerText}</div>
          </>
        }
      </div>

        { (!isEditingCard && !isShowingAnwser) &&
          <Button label="Revelar" onClick={handleRevealAnswer}
            className="hover:bg-neutral-300"
          />  
        }

        { (!isEditingCard && isShowingAnwser) &&
          <div className="flex gap-5 relative">
            <Button label="Fácil" color='bg-green-600' onClick={handleSetDifficulty}
              className="hover:bg-green-700"
            />
            <Button label="Médio" color='bg-yellow-500' onClick={handleSetDifficulty}
              className="hover:bg-yellow-600"
            />
            <Button label="Difícil" color='bg-red-500' onClick={handleSetDifficulty}
              className="hover:bg-red-600"
            />
              <div className="absolute top-[12px] -left-[30px]">
                <Tooltip 
                  label="Quanto mais facil, menos o cartão aparecerá" 
                  position="-top-[20px] -left-[148px]"
                >
                  <BsInfoCircle color="gray" size='16px'/>
                </Tooltip>
              </div>
          </div>        
        }
        
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