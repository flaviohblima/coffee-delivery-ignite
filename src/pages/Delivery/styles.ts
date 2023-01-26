import styled, { css } from 'styled-components'

export const DeliveryContainer = styled.main`
  padding: 5rem 10rem;

  header {
    margin-bottom: 2.5rem;

    h1 {
      font-size: 2rem;
      font-family: 'Baloo 2';
      color: ${(props) => props.theme['yellow-dark']};
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 6.875rem;
    position: relative;

    @media (min-width: 1200px) {
      flex-direction: row;
    }

    > div {
      flex: 1;
      ${(props) => css`
        background: linear-gradient(
          to right,
          ${props.theme.yellow},
          ${props.theme.purple}
        );
      `}

      padding: 1px;
      border-radius: 0.375rem 2.25rem;

      ul {
        height: 100%;
        width: 100%;
        border-radius: 0.375rem 2.25rem;
        background: ${(props) => props.theme.background};
        list-style-type: none;
        padding: 2.5rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        li {
          display: flex;
          gap: 0.75rem;
        }
      }
    }
  }
`

export type IconColor = 'primary' | 'secondary' | 'tertiary'

interface CircularListIconProps {
  iconColor: IconColor
}

const iconColorsMap = {
  primary: 'purple',
  secondary: 'yellow',
  tertiary: 'yellow-dark',
} as const

export const CircularListIcon = styled.span<CircularListIconProps>`
  min-width: 2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => props.theme[iconColorsMap[props.iconColor]]};
  color: ${(props) => props.theme.white};
`
