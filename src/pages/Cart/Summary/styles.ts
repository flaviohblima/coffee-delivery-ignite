import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;

  ul {
    li {
      list-style-type: none;
      margin-bottom: 1px solid ${(props) => props.theme['base-button']};
    }
  }
`
