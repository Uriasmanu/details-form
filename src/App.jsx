import EstilosGlobais from "./componentes/estilosGlobais"
import styled from 'styled-components';

const ContainerApp = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 19%;
    height: 100vh;
    margin-bottom: 10%;

    @media (max-width: 600px) {
      display: flex;
    justify-content: center;
    gap: 19%;
    height: 100vh;
    flex-direction: column;
    align-items: center;

    }

`
import Banner from "./componentes/banner";
import Formulario from "./componentes/formulario";
import Cartao from "./componentes/cartaoFrente";
import Cartao2 from "./componentes/cartaoCosta";
import { ContextProvider } from "./contex";


function App() {

  return (
    <>
      <ContextProvider>
        <EstilosGlobais />
        <ContainerApp>
          <div className="container-cartoes">
            <Banner/>
            <div>
              <Cartao />
              <Cartao2 />
            </div>
          </div>
          <Formulario />
        </ContainerApp>
      </ContextProvider>
    </>
  )
}

export default App
