import styled from 'styled-components'

export const ProductsPageContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  position: relative;

  & > img {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  section {
    z-index: 10;
    padding: 5rem 10rem;
  }
`

export const SynopsisSection = styled.section`
  display: flex;
  gap: 3.5rem;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 1rem;
      font-family: 'Baloo 2';
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }

    & > p {
      margin-bottom: 4.125rem;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    ul {
      display: grid;
      grid-template-columns: 45% 1fr;
      gap: 1rem;
    }
  }

  img {
    width: 29.75rem;
    height: auto;
    flex: 0 0 auto;
  }
`

export const CoffeeListSection = styled.section`
  h2 {
    margin-bottom: 3.5rem;
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
  }
`
