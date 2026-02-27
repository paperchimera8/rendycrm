import type { FC, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<CardProps> = ({ className = '', ...props }) => {
  return <div className={`rounded-xl border border-border bg-card ${className}`} {...props} />
}

export const CardContent: FC<CardContentProps> = ({ className = '', ...props }) => {
  return <div className={className} {...props} />
}
