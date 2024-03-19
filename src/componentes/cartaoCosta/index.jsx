import styled from 'styled-components';
import cartao2 from "../../../public/images/bg-card-back.png";
import { useContext } from 'react';
import { Context } from '../../contex';


const CartãoBack = styled.div`
    position: absolute;
    width: 400px;
    height: 240px;
    z-index: 1;
    top: 22rem;
    left: 16%;
    display: flex;
    flex-direction: column;
    gap: 30px;


    input::placeholder {
        color: #fff;
        font-size: 14px;
        letter-spacing: 2px;
    }
    
`;

const Div = styled.div` 
    background-image: url("${cartao2}"); 
    width: 90%;
    height: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 3%;
    padding: 10%;
    display: flex;
    justify-content: flex-end;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input{
        position: relative;
        top: 68px;
        width: 33px;
        height: 20px;
        background: none;
        border: none;
    }
`;

const Cartao2 = () => {
    const {
        cvc,
        handleCvcChange,

    } =  useContext(Context) 
    return(
        <CartãoBack>
            <Div>
            <input 
            type="number" 
            placeholder='000'
            value={cvc}
            onChange={handleCvcChange} 
            />
            </Div>
        </CartãoBack>
    )
}

export default Cartao2;