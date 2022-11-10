import { useState } from "react";
import { Button } from "../components/Button";
import { MainFilter } from "../components/MainFilter";
import { Text } from "../components/Text";

export default function Home() {
  const [ isShowingAnwser, setIsShowingAnwser ] = useState(false)

  function handleRevealAnswer() {
    setIsShowingAnwser(true)
  }

  function handleSetDifficultu() {
    setIsShowingAnwser(false)
  }

  return (
    <div className="h-screen">
      <div className="w-full p-5">
        <MainFilter />
      </div>
      {/* <div className="h-full flex justify-center items-center"> */}
      <div className="
        absolute left-0 right-0 top-0 bottom-0 m-auto w-[600px] h-[300px]
        flex flex-col justify-between items-center
      ">
        <div>
          <Text family="serif">
            Qual nome do osso do braço que parece com o nome de uma tecnologia de transimissão de audio?
          </Text>
          { isShowingAnwser && 
            <div>
              <hr className="my-5 border-neutral-500"/>
              <Text>
                Rádio
              </Text>
            </div>
          }
        </div>
          { isShowingAnwser 
            ? <div className="flex gap-4">
              <Button label="Fácil" color='bg-green-600' onClick={handleSetDifficultu}/>
              <Button label="Médio" color='bg-yellow-500' onClick={handleSetDifficultu}/>
              <Button label="Difícil" color='bg-red-500' onClick={handleSetDifficultu}/>
            </div>
            
            : <Button label="Revelar" onClick={handleRevealAnswer}/>
          }
        
      </div>
    </div>
  )
}
