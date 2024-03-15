import styled from 'styled-components';

import cartao1 from "../../../public/images/bg-card-front.png"

import cartao2 from "../../../public/images/bg-card-back.png"

import logo from "../../../public/images/card-logo.svg"

const ContainerCartão = styled.div`
    position: absolute;
    width: 30%;
    height: 500px;
    z-index: 1;
    top: 10%;
    left: 10%;
    display: flex;
    flex-direction: column;
    gap: 30px;

`

const Div = styled.div` 
    background-image: url("${cartao1}"); 
    width: 90%;
    height: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 3%;


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }


`


const Img = styled.img`
        width: 90%;
        
`

const Cartao = () => {

    return (
        <ContainerCartão>
            <Div>
                <img src={logo} alt="" />
                <input type="text" />
                <input type="text" />
                <input type="nuber" />

            </Div>
            <div>
            <Img src={cartao2} alt="imagem do cartao de costas" srcset="" />
            <input type="nuber" />
            </div>
        </ContainerCartão>
    )
}

export default Cartao