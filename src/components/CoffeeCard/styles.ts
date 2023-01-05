import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  width: 16rem;
  padding: 0 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.375rem 2.25rem;

  background: ${(props) => props.theme['base-card']};

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: auto;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin: 0.75rem 0 1rem;

    li {
      list-style-type: none;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: 0 0.5rem;
      border-radius: 6.25rem;
      margin: 0;

      font-size: 0.625rem;
      font-weight: 700;
    }
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-label']};
  }

  div {
    padding: 0 0.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      align-items: flex-end;
      gap: 0.25rem;

      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};

      strong {
        font-size: 1.5rem;
        margin-bottom: -0.125rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    div {
      width: auto;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
