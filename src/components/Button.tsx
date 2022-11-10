import { ReactNode } from "react"
import {Text} from './Text'

interface TextProps{
  label: string;
  onClick?(): void;
  color?: string
}

export function Button({ onClick, label, color='bg-white' }: TextProps) {

  return (
    <button
      className={`
        text-neutral-900
        font-bold
        ${color}
        rounded-lg
        px-4 py-2
      `}
        onClick={onClick}
      >
      <Text color="black">{label}</Text>
    </button>
  )
}