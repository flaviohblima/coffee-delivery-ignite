import React from 'react'
import { IconButtonContainer, IconButtonVariant } from './styles'

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  text?: string
  variant?: IconButtonVariant
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  text,
  ...rest
}) => {
  return (
    <IconButtonContainer variant={variant} {...rest}>
      {icon}
      {text ? <span>{text}</span> : null}
    </IconButtonContainer>
  )
}
