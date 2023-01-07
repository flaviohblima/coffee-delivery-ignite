import styled from 'styled-components'

export const PaymentRadioButtonContainer = styled.li`
  list-style-type: none;
  flex: 1;
  font-size: 0.75rem;

  input[type='radio'] {
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 160%;
    padding: 1rem;
    border-radius: 0.365rem;
    background: ${(props) => props.theme['base-button']};
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }

    span {
      line-height: 160%;
    }
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
