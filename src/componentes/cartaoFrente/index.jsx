import styled from 'styled-components';
import cartao1 from "../../../public/images/bg-card-front.png";
import logo from "../../../public/images/card-logo.svg";
import { Context } from '../../contex';
import { useContext } from 'react';

const ContainerCartão = styled.div`
    position: absolute;
    width: 400px;
    height: 240px;
    z-index: 1;
    top: 10%;
    left: 10%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    input{
        letter-spacing: 2px;
    }
    
    input::placeholder {
        color: #fff;
    }

    @media only screen and (max-width: 600px) {
        position: absolute;
        width: 80vw;
        height: 230px;
        z-index: 2;
        top: 35%;
        left: 3%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`;

const Div = styled.div` 
    background-image: url("${cartao1}"); 
    width: 90%;
    height: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 3%;
    padding: 10%;
    display: flex;
    flex-direction: column;
  
    input {
        border: none;
        background: none;
        color: #fff; /* Cor do texto */
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    img {
        width: 20%;
        margin-bottom: 15%;
    }

    .card-number {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 5%;


        input {
            width: 30px;
            width: 70px;
            font-size: 25px;
        }
    }

    .card-exp{
        width: 100%;
        display: flex;
        justify-content: space-between;

        input {
            font-size: 12px;
        }

        input:nth-child(2){
            width: 49px;
        }
    }

    .container-data{
        box-sizing: border-box;
        input{
            width: 25px;
        }
    }

    
`;

const Cartao = () => {
    const {
        name,
        handleNameChange,
        titular,
        handleTitularChange,
        mes,
        dia,
        handleDiaChange,
        handleMesChange

    } = useContext(Context)

    return (
        <>
            <ContainerCartão>
                <Div>
                    <img src={logo} alt="" />
                    <div className='card-number'>
                        <input
                            type="text"
                            placeholder='0000'
                            onChange={handleNameChange}
                            value={name.substring(0, 4)}
                        />
                        <input
                            type="text"
                            placeholder='0000'
                            onChange={handleNameChange}
                            value={name.substring(4, 8)}
                        />
                        <input
                            type="text"
                            placeholder='0000'
                            onChange={handleNameChange}
                            value={name.substring(8, 12)}
                        />
                        <input
                            type="text"
                            placeholder='0000'
                            onChange={handleNameChange}
                            value={name.substring(12, 16)}
                        />
                    </div>
                    <div className='card-exp'>
                        <input
                            type="text"
                            placeholder='JANE APPLESEED'
                            onChange={handleTitularChange}
                            value={titular}
                        />
                        <div className='container-data'>
                            <input
                                type="number"
                                placeholder='00/'
                                onChange={handleMesChange}
                                value={mes}
                            />
                            <input
                                type="number"
                                placeholder='00'
                                onChange={handleDiaChange}
                                value={dia}
                            />
                        </div>
                    </div>
                </Div>
            </ContainerCartão>
        </>
    );
};

export default Cartao;
