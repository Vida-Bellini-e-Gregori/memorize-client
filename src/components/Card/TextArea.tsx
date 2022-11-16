import { useEffect, useRef } from "react";


interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement>{
  isEditingCard: boolean;
  setCurrentText(innerText: string): void;
  currentText: string;
  className?: string;
}


export function TextArea({ 
  isEditingCard, 
  setCurrentText, 
  currentText, 
  className,
  ...rest
}: TextAreaProps){

  const textAreaRef = useRef(null)

  // to make the textarea size responsive
  function adjustHeight(el: HTMLTextAreaElement){
    el.style.height = '1px';
    el.style.height = (el.scrollHeight)+"px";
  }
  

  useEffect(() => {
    if(textAreaRef.current){
      adjustHeight(textAreaRef.current)
    }

  }, [currentText])


  return (
    <textarea ref={textAreaRef}
      readOnly={!isEditingCard}
      value={currentText}
      onChange={(e) => setCurrentText(e.target.value)}
      className={`
        overflow-hidden
        leading-relaxed
        w-full
        h-[26px]
        text-neutral-50
        bg-neutral-900
        outline-none
        decoration-gray-900
        resize-none
        text-justify
        font-serif
        ${className}
      `} 
      {...rest}
    />

  )
}