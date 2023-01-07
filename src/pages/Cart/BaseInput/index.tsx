import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullwidth?: boolean
  flexgrow?: boolean
  optional?: boolean
}

// eslint-disable-next-line react/display-name
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ fullwidth, flexgrow, optional, ...rest }, ref) => {
    return (
      <InputContainer
        fullwidth={fullwidth}
        flexgrow={flexgrow}
        optional={optional}
        htmlFor={rest.id}
      >
        <input ref={ref} {...rest} />

        {optional ? <span>Opcional</span> : null}
      </InputContainer>
    )
  },
)
