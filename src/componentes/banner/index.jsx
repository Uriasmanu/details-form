import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContainerBanner = styled.div`
    background-image: url('/public/images/bg-main-desktop.png');
    height: 100vh;
    width: 30vw;

    img{
        width: 30vw;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        background-image: url('/public/images/bg-main-mobile.png');
        width: 100vw;


        img{
        width: 100vw;
        height: 70%;
    }
    }
`

const Banner = () =>{
    const [banner, setBanner] = useState('');

    useEffect(() => {
        // Verificar se é um dispositivo móvel
        const isMobile = window.matchMedia("(max-width: 600px)").matches;
        // Definir o banner com base no dispositivo
        if (isMobile) {
            setBanner('/public/images/bg-main-mobile.png');
        } else {
            setBanner('/public/images/bg-main-desktop.png');
        }
    }, []);

    return(
        <ContainerBanner>
            <img src={banner} alt="Banner" />
        </ContainerBanner>
    )
}

export default Banner;
