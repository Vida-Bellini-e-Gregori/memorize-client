import { useState } from "react";
import { Text } from "../Text";

interface FilterUnit{
  title: string;
  isOnFocus?: boolean
  
}

export function DropDown({ title, isOnFocus=false }: FilterUnit) {

  const dropDownOnFocusStyle = 'bg-gray-300'


  return (

    <div className="relative min-w-[0px]">

     {/*select*/}
      <div className={`
          w-32
          mx-3
          box-border 
          text-white 
          flex justify-center items-center
          px-2
          rounded
          cursor-pointer
          transition-all ease-out duration-200
          ${isOnFocus ? dropDownOnFocusStyle : ''}
          hover:font-bold                   
      `}>

        {/*selected*/}
        <Text>{title}</Text>

        {/*caret*/}
        {/* <div className={` text-xs
          ${isOnFocus ? 'rotate-180' : ''}
        `}>
          V
        </div> */}
      </div>

      {/*menu*/}
      <ul className={`
        px-1 px-2 bg-gray-400 border border-white
        absolute top-8 w-32 
        ${isOnFocus ? 'opacity-100' : 'opacity-0'}
      `}>
        <li className="px-3 py-2 border rounded">Matemática</li>
        <li>História</li>
        <li>Ingles</li>
        <li>Matemática</li>

        {/*menu*/}
        <li>História</li>
        <li>Ingles</li>        
      </ul>

    </div>

    )
}