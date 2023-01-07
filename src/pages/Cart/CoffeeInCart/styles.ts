import styled from 'styled-components'

export const CoffeeInCartContainer = styled.li`
  list-style-type: none;
  margin-bottom: 1px solid ${(props) => props.theme['base-button']};

  & > div {
    width: 100%;
    display: flex;
    gap: 1.25rem;

    img {
      height: 4rem;
    }

    & > div {
      flex: 1;

      p {
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    strong {
      display: flex;
      justify-content: flex-end;

      font-weight: 700;
      color: ${(props) => props.theme['base-text']};
    }
  }

  hr {
    margin: 0.75rem 0;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const CoffeeActions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`
