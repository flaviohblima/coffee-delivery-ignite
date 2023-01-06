import React, { ReactNode } from 'react'
import { PaymentRadioButtonContainer } from './styles'

interface PaymentRadioButtonProps {
  id: string
  icon: ReactNode
  label: string
  name: string
}

export const PaymentRadioButton: React.FC<PaymentRadioButtonProps> = ({
  id,
  icon,
  label,
  name,
}) => {
  return (
    <PaymentRadioButtonContainer>
      <input type="radio" id={id} name={name} />

      <label htmlFor={id}>
        {icon}
        <span>{label.toUpperCase()}</span>
      </label>
    </PaymentRadioButtonContainer>
  )
}
