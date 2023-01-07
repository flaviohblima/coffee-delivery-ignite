import styled from 'styled-components'

interface InputContainerProps {
  fullwidth?: boolean
  flexgrow?: boolean
  optional?: boolean
}

export const InputContainer = styled.label<InputContainerProps>`
  width: ${(props) => (props.fullwidth ? '100%' : 'unset')};
  flex: ${(props) => (props.flexgrow ? 1 : 'unset')};
  position: relative;

  input {
    width: 100%;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.75rem;
    padding-right: ${(props) => (props.optional ? '3.5rem' : '0.75rem')};
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;

    transition: border 30ms ease-in;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }

    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
  }

  span {
    content: 'Opcional';
    color: ${(props) => props.theme['base-label']};
    font-size: 0.75rem;
    font-style: italic;
    line-height: 130%;

    position: absolute;
    top: 50%;
    right: 0.75rem;

    transform: translateY(-50%);
  }
`
