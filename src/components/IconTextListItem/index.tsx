import React, { ReactNode } from 'react'
import { IconTextListItemContainer, IconTextListItemVariant } from './styles'

interface IconTextListItemProps {
  icon: ReactNode
  text: string
  variant?: IconTextListItemVariant
}

export const IconTextListItem: React.FC<IconTextListItemProps> = ({
  icon,
  text,
  variant = 'primary',
}) => {
  return (
    <IconTextListItemContainer variant={variant}>
      <span>{icon}</span>
      <p>{text}</p>
    </IconTextListItemContainer>
  )
}
