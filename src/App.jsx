import EstilosGlobais from "./componentes/estilosGlobais"
import styled from 'styled-components';

const ContainerApp = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 19%;
    height: 100vh;

`
import banner from '/public/images/bg-main-desktop.png'
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
            <Banner imagem={banner} altImagem={banner} />
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
