import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
  height: 6.5rem;
  padding: 2rem 10rem;

  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
