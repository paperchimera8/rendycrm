import type { ButtonHTMLAttributes, FC } from 'react'

type ButtonVariant = 'default' | 'outline' | 'secondary'
type ButtonSize = 'default' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-black text-white hover:bg-black/90',
  outline: 'bg-transparent border border-border text-foreground hover:bg-muted/60',
  secondary: 'bg-muted text-foreground hover:bg-muted/80',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2 text-sm',
  lg: 'h-12 px-6 py-3 text-base',
}

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  )
}
