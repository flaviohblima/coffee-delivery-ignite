import styled from 'styled-components'

export const CartContainer = styled.main`
  flex: 1;
  background: ${(props) => props.theme.background};

  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 2rem;

  padding: 2.5rem 10rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2 {
      font-family: 'Baloo 2';
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    & > form {
      padding: 2.5rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme['base-card']};

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      header {
        display: flex;
        gap: 0.5rem;
        margin: 1rem;

        h3 {
          font-weight: 400;
          color: ${(props) => props.theme['base-subtitle']};
          margin-bottom: 0.25rem;
        }

        p {
          font-size: 0.875rem;
          color: ${(props) => props.theme['base-text']};
        }
      }

      fieldset,
      ul {
        width: 100%;
        border: none;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.75rem;
      }
    }
  }
`
