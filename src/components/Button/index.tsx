import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <ButtonContainer>{label.toUpperCase()}</ButtonContainer>
}
