import React, { InputHTMLAttributes, ReactNode } from 'react'
import { PaymentRadioButtonContainer } from './styles'

interface PaymentRadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  icon: ReactNode
  label: string
  name: string
}

// eslint-disable-next-line react/display-name
export const PaymentRadioButton = React.forwardRef<
  HTMLInputElement,
  PaymentRadioButtonProps
>(({ id, icon, label, ...rest }, ref) => {
  return (
    <PaymentRadioButtonContainer>
      <input type="radio" id={id} {...rest} ref={ref} />

      <label htmlFor={id}>
        {icon}
        <span>{label.toUpperCase()}</span>
      </label>
    </PaymentRadioButtonContainer>
  )
})
