import { json } from "stream/consumers";
import { Tooltip } from "./Tooltip";


export function AddCardButton() {

  const cardToAdd = {
    question: 'quanto é 1 + 1',
    answer: '2'
  }

  async function handleAddCardButton() {
    fetch('http://192.168.0.115:8000/cards', {
      method: 'post',
      body: JSON.stringify(cardToAdd)
    })
  }

  return (
    <div className=" mt-10 lg:ml-20 lg:mt-0">
      <Tooltip label="Criar novo card" position="-top-5 -left-6">
        <button onClick={handleAddCardButton} className="
          w-20 h-20
          rounded-2xl border-4 border-neutral-800
          flex justify-center items-center
          border-dashed
          duration-200
          hover:bg-neutral-800              
        "> <p className="text-neutral-700 font-light text-4xl" >+</p> </button>
      </Tooltip>
    </div>
  )
}