import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { BsInfoCircle } from 'react-icons/bs' 
import { Tooltip } from "../Tooltip";


interface CardProps{
  id: number;
  initialQuestionText: string;
  initialAnswerText: string;
}


interface TextAreaProps{
  isEditingCard: boolean;
  setCurrentText(innerText: string): void;
  currentText: string
}


export function TextArea({ isEditingCard, setCurrentText, currentText }: TextAreaProps){


  return (
    <div 
      role={'textbox'} 
      contentEditable={isEditingCard}
      onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setCurrentText(e.target.innerText)}
      className={`
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
      `}  
      >
        {currentText}
      </div>

  )
}