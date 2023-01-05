import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.875rem;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  transition: background-color 100ms ease-in;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
