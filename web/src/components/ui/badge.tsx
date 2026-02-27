import type { FC, HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'secondary'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-primary text-white',
  secondary: 'bg-muted text-foreground border border-border',
}

export const Badge: FC<BadgeProps> = ({ variant = 'default', className = '', ...props }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
