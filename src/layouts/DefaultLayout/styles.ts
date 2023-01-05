import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  max-width: 90rem;
  height: 100%;
  margin: 0 auto;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;

  position: relative;
`
