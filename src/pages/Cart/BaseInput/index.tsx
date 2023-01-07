import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullwidth?: boolean
  flexgrow?: boolean
  optional?: boolean
}

export const BaseInput: React.FC<BaseInputProps> = ({
  fullwidth,
  flexgrow,
  optional,
  ...rest
}) => {
  return (
    <InputContainer
      fullwidth={fullwidth}
      flexgrow={flexgrow}
      optional={optional}
      htmlFor={rest.name}
    >
      <input {...rest} />

      {optional ? <span>Opcional</span> : null}
    </InputContainer>
  )
}
