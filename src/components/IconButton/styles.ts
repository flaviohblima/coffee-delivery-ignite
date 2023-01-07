import styled, { css } from 'styled-components'

export type IconButtonSize = 'small' | 'medium'

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondary-light'
  | 'default'

interface IconButtonContainerProps {
  variant: IconButtonVariant
  size: IconButtonSize
}

const buttonColors = {
  primary: {
    background: 'yellow-light',
    color: 'white',
    iconColor: 'yellow-dark',
  },
  secondary: {
    background: 'purple-dark',
    color: 'white',
    iconColor: 'white',
  },
  'secondary-light': {
    background: 'purple-light',
    border: 'purple-light',
    color: 'purple',
    iconColor: 'purple',
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
    background: 'purple',
    border: 'purple',
    color: 'white',
    iconColor: 'white',
  },
  'secondary-light': {
    background: 'purple-light',
    border: 'purple-dark',
    color: 'purple-dark',
    iconColor: 'purple-dark',
  },
  default: {
    background: 'base-hover',
    border: 'base-hover',
    color: 'base-subtitle',
    iconColor: 'purple-dark',
  },
} as const

const iconButtonSizes = {
  small: '2rem',
  medium: '2.375rem',
} as const

const fontSizes = {
  small: '0.75rem',
  medium: '0.875rem',
} as const

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  height: ${(props) => iconButtonSizes[props.size]};
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem;

  font-size: ${(props) => fontSizes[props.size]};
  line-height: 160%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  transition: all 100ms ease-in;

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
