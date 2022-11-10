import { ReactNode } from "react"
import {Text} from './Text'

interface TextProps{
  label: string;
  onClick?(): void;
  color?: string;
  className?: string
}

export function Button({ onClick, label, color='bg-white', className }: TextProps) {

  return (
    <button
      className={`
        text-neutral-900
        font-bold
        ${color}
        rounded-lg
        px-4 py-2
        transition-all easy-out duration-200
        hover:shadow-md
        ${className}
      `}
        onClick={onClick}
      >
      <Text color="black">{label}</Text>
    </button>
  )
}