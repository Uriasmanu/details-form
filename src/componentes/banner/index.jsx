import styled from 'styled-components';

import mobile from '../../../public/images/bg-main-mobile.png'

import desktop from '../../../public/images/bg-main-desktop.png'

const ContainerBanner = styled.div`
    background-image: url(${desktop});
    height: 100vh;
    width: 30vw;

    @media only screen and (max-width: 600px) {
        background-image: url(${mobile});
        width: 100vw;
      
    }
`

const Banner = () =>{
    

    return(
        <ContainerBanner>
            
        </ContainerBanner>
    )
}

export default Banner;
