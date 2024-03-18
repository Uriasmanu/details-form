import styled from 'styled-components';

const ContainerBanner = styled.div`
    height: 100vh;

    img{
        height: 100%;
    }
`

const Banner = ({imagem, altImagem}) =>{
    return(
        <ContainerBanner>
            <img src={imagem} alt={altImagem} />
        </ContainerBanner>
    )
}

export default Banner; 