import { ReactNode } from "react"

interface TextProps{
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg';
  family?: 'sans' | 'serif';
  weight?: 'light' | 'medium' | 'bold';
  color?: 'white' | 'black';
  className?: string;
}

export function Text({ 
  children, 
  size='base', 
  family='sans', 
  weight='medium',
  color='white',
  className,
}: TextProps) {

  const colorStyle = color === 'white' ? 'text-neutral-100' : 'text-neutral-900'

  return (
    <p 
      className={`
        leading-relaxed
        ${colorStyle}
        text-${size}   
        font-${family}
        font-${weight}
        ${className}
      `}
      >
      {children}
    </p>
  )
}