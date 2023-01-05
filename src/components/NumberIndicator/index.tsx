import React, { ReactNode } from 'react'
import { IndicatorVariant, NumberIndicatorContainer } from './styles'

interface NumberIndicatorProps {
  children: ReactNode
  number: number
  variant?: IndicatorVariant
}

export const NumberIndicator: React.FC<NumberIndicatorProps> = ({
  children,
  number,
  variant = 'default',
}) => {
  return (
    <NumberIndicatorContainer variant={variant}>
      {children}
      {number ? <span>{number}</span> : null}
    </NumberIndicatorContainer>
  )
}
