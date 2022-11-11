import { Tooltip } from "./Tooltip";


export function AddCardButton() {
  return (
    <div className=" mt-10 lg:ml-20 lg:mt-0">
      <Tooltip label="Criar novo card" position="-top-5 -left-6">
        <button className="
          w-20 h-20
          rounded-full border-4 border-neutral-800
          flex justify-center items-center
          border-dashed
          duration-200
          hover:bg-neutral-800              
        "> <p className="text-neutral-700 font-light text-4xl" >+</p> </button>
      </Tooltip>
    </div>
  )
}