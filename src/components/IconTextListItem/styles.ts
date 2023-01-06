import styled from 'styled-components'

export type IconTextListItemVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'default'

interface IconTextListItemContainerProps {
  variant: IconTextListItemVariant
}

const variantColors = {
  primary: 'yellow-dark',
  secondary: 'purple',
  tertiary: 'yellow',
  default: 'base-text',
} as const

export const IconTextListItemContainer = styled.li<IconTextListItemContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme[variantColors[props.variant]]};
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }
`
