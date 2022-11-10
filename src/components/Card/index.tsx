import { useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";

export function Card(){
  const [ questionText, setQuestionText ] = useState('Qual nome do osso do braço que parece com o nome de uma tecnologia de transimissão de audio?')
  const [ answerText, setAnswerText ] = useState('Rádio')
  const [ isShowingAnwser, setIsShowingAnwser ] = useState(false)
  const [ isEditingCard, setEditingCard ] = useState(false)

  function handleRevealAnswer() {
    setIsShowingAnwser(true)
  }

  function handleSetDifficulty() {
    setIsShowingAnwser(false)
  }


  return (
    <div className={`
      flex flex-col justify-between items-center
      w-[700px] h-[400px]
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
        <textarea readOnly={!isEditingCard}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className="            
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
          " 
        />
        { isShowingAnwser && 
          <div>
            <hr className="my-5 border-neutral-500"/>
            <textarea readOnly={!isEditingCard}
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              className="            
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
              " 
            />
          </div>
        }
      </div>

        { (!isEditingCard && !isShowingAnwser) &&
          <Button label="Revelar" onClick={handleRevealAnswer}
            className="hover:bg-neutral-300"
          />  
        }

        { (!isEditingCard && isShowingAnwser) &&
          <div className="flex gap-4">
            <Button label="Fácil" color='bg-green-600' onClick={handleSetDifficulty}
              className="hover:bg-green-700"
            />
            <Button label="Médio" color='bg-yellow-500' onClick={handleSetDifficulty}
              className="hover:bg-yellow-600"
            />
            <Button label="Difícil" color='bg-red-500' onClick={handleSetDifficulty}
              className="hover:bg-red-600"
            />
          </div>        
        }
        
        { (isEditingCard && isShowingAnwser) &&
          <div className="flex gap-5">
            <Button label="Salvar alterações" onClick={() => setEditingCard(false)} 
              className="hover:bg-neutral-300"
            />
            <Button label="Cancelar edição" onClick={() => setEditingCard(false)} color='bg-red-500'
              className="hover:bg-red-600"
            />      
          </div>        
        }


      
    </div>    
  )
}