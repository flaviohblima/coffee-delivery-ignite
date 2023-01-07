import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;

  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;

      strong:first-of-type,
      p {
        flex: 1;
      }

      p {
        font-size: 0.875rem;
      }

      strong {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }

    button {
      margin-top: 0.75rem;
    }
  }
`
