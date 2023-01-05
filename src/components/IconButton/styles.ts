import styled, { css } from 'styled-components'

export type IconButtonVariant = 'primary' | 'secondary' | 'default'

interface IconButtonContainerProps {
  variant: IconButtonVariant
}

const buttonColors = {
  primary: {
    background: 'yellow-light',
    color: 'white',
    iconColor: 'yellow-dark',
  },
  secondary: {
    background: 'purple',
    color: 'white',
    iconColor: 'white',
  },
  default: {
    background: 'base-button',
    color: 'base-text',
    iconColor: 'purple',
  },
} as const

const buttonColorsHover = {
  primary: {
    background: 'yellow-light',
    border: 'yellow-dark',
    color: 'white',
    iconColor: 'yellow-dark',
  },
  secondary: {
    background: 'purple-dark',
    border: 'purple-dark',
    color: 'white',
    iconColor: 'white',
  },
  default: {
    background: 'base-hover',
    border: 'base-subtitle',
    color: 'base-subtitle',
    iconColor: 'purple-dark',
  },
} as const

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  height: 2.375rem;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  transition: all 100ms ease-in-out;

  border: solid 1px transparent;

  ${(props) => css`
    background: ${props.theme[buttonColors[props.variant].background]};
    color: ${props.theme[buttonColors[props.variant].color]};

    svg {
      color: ${props.theme[buttonColors[props.variant].iconColor]};
    }

    &:hover {
      background: ${props.theme[buttonColorsHover[props.variant].background]};
      color: ${props.theme[buttonColorsHover[props.variant].color]};
      border: solid 1px ${props.theme[buttonColorsHover[props.variant].border]};

      svg {
        color: ${props.theme[buttonColorsHover[props.variant].iconColor]};
      }
    }
  `}
`
