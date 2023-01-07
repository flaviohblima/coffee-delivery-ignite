import React from 'react'
import {
  IconButtonContainer,
  IconButtonSize,
  IconButtonVariant,
} from './styles'

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  text?: string
  variant?: IconButtonVariant
  size?: IconButtonSize
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  text,
  size = 'medium',
  ...rest
}) => {
  return (
    <IconButtonContainer variant={variant} size={size} {...rest}>
      {icon}
      {text ? <span>{text}</span> : null}
    </IconButtonContainer>
  )
}
