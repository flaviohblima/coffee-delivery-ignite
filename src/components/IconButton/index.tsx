import React from 'react'
import { IconButtonContainer, IconButtonVariant } from './styles'

interface IconButtonProps {
  icon: React.ReactNode
  text?: string
  variant?: IconButtonVariant
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  text,
}) => {
  return (
    <IconButtonContainer variant={variant}>
      {icon}
      {text ? <span>{text}</span> : null}
    </IconButtonContainer>
  )
}
