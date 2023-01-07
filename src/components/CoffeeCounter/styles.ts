import styled from 'styled-components'

export type CoffeeCountSize = 'small' | 'medium'

interface CoffeeCountContainerProps {
  size: CoffeeCountSize
}

const coffeeCountSizes = {
  small: '2rem',
  medium: '2.375rem',
} as const

export const CoffeeCountContainer = styled.div<CoffeeCountContainerProps>`
  height: ${(props) => coffeeCountSizes[props.size]};
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  p {
    margin: 0;
    min-width: 1.25rem;
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    text-align: center;
  }

  button {
    height: 0.875rem;
    width: 0.875rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    font-weight: 700;
    cursor: pointer;

    display: grid;
    place-items: center;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
