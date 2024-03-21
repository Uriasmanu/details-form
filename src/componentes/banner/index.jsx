import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContainerBanner = styled.div`
    background-image: url('/public/images/bg-main-desktop.png');
    height: 100vh;
    width: 30vw;

    @media only screen and (max-width: 600px) {
        background-image: url('/public/images/bg-main-mobile.png');
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
