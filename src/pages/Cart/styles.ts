import styled from 'styled-components'

export const CartContainer = styled.main`
  flex: 1;
  width: 100%;
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 2.5rem 10rem;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h2 {
      font-family: 'Baloo 2';
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    form {
      width: 100%;
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
    }
  }
`

export const FieldGroup = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.75rem;
`

export const PaymentMethodContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`
