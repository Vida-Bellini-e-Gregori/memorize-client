import { ReactNode } from "react"

interface TooltipProps{
  children: ReactNode;
  label: string;
  type?: 'top' | 'right';
  position: string;
}

// this component creates a hint, you will have to specify the absolute position
export function Tooltip({ children, type = 'top', position, label }:TooltipProps) {

    return (
      <div className="group relative ">
        {children}
        <span className={`
          absolute 
          opacity-0 
          whitespace-nowrap
          ${position}
          -translate-y-full 
          px-4 
          py-2 
          bg-neutral-700 
          rounded-md 
          text-center 
          text-white 
          text-sm
          transition ease-in-out delay-500
          duration-300 
          group-hover:opacity-100  

          ${ type === "top" && `
            after:content-[''] 
            after:absolute 
            after:left-1/2 
            after:top-[100%] 
            after:-translate-x-1/2 
            after:border-8 
            after:border-x-transparent 
            after:border-b-transparent 
            after:border-t-neutral-700
          `}

          ${ type === 'right' && `
            before:content-[''] 
            before:absolute 
            before:top-1/2  
            before:right-[100%] 
            before:-translate-y-1/2 
            before:border-8 
            before:border-y-transparent 
            before:border-l-transparent 
            before:border-r-neutral-700
          `}

        `}>
          {label}
        </span>
      </div>
    )  
  

}