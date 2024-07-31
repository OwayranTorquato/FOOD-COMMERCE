import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  //Configuração de Section
  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    //Configuração do logotipo dentro da Section
    img {
      width: 10rem;
      margin-bottom: 2rem;
    }
    
    //Comportamento responsivo do logotipo para mobile
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
    //End comportamento
  }
`
