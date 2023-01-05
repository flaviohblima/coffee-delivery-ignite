import styled from 'styled-components'

export type IndicatorVariant = 'primary' | 'secondary' | 'default'

interface NumberIndicatorContainerProps {
  variant: IndicatorVariant
}

const indicatorColor = {
  primary: 'yellow-dark',
  secondary: 'purple-light',
  default: 'base-title',
} as const

export const NumberIndicatorContainer = styled.div<NumberIndicatorContainerProps>`
  position: relative;

  & > span {
    height: 1.25rem;
    min-width: 1.25rem;
    border-radius: 9999px;
    padding: 0.25rem;
    padding-left: 0.3125rem;

    line-height: 1rem;
    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    background-color: ${(props) => props.theme[indicatorColor[props.variant]]};
    color: ${(props) => props.theme.white};
  }
`
