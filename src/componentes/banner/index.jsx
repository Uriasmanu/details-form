import styled from 'styled-components';

const ContainerBanner = styled.div`
    height: 100vh;
    width: 30vw;

    img{
        width: 100%;
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