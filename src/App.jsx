import EstilosGlobais from "./componentes/estilosGlobais"
import styled from  'styled-components';

const  ContainerApp = styled.div`
    display: flex;
    justify-content: space-between;
`
import banner from '/public/images/bg-main-desktop.png'
import Banner from "./componentes/banner";
import Formulario from "./componentes/formulario";
import Cartao from "./componentes/cartao";

function App() {

  return (
    <>
      <EstilosGlobais/>
      <ContainerApp>
      <Banner imagem={banner} altImagem={banner}/>
      <Formulario/>
      <Cartao/>
      </ContainerApp>
    </>
  )
}

export default App
