import { Minus, Plus } from 'phosphor-react'
import React from 'react'
import { CoffeeCountContainer, CoffeeCountSize } from './styles'

interface CoffeeCounterProps {
  onSubtract: () => void
  onSum: () => void
  value: number
  size?: CoffeeCountSize
}

export const CoffeeCounter: React.FC<CoffeeCounterProps> = ({
  onSubtract,
  onSum,
  value,
  size = 'medium',
}) => {
  return (
    <CoffeeCountContainer size={size}>
      <button onClick={onSubtract}>
        <Minus size={14} />
      </button>
      <p>{value}</p>
      <button onClick={onSum}>
        <Plus size={14} />
      </button>
    </CoffeeCountContainer>
  )
}
