

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

  function adjustHeight(el: HTMLTextAreaElement){
    el.style.height = '1px';
    el.style.height = (el.scrollHeight)+"px";
  }


  return (
    <textarea readOnly={!isEditingCard}
      onKeyUp={(e: any ) => adjustHeight(e.target)}
      value={currentText}
      onChange={(e) => setCurrentText(e.target.value)}
      className={`
        overflow-hidden
        leading-relaxed
        w-full
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