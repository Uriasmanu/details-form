import styled from 'styled-components';
import Botao from '../botao';
import { useContext, useState } from 'react';
import { Context } from '../../contex';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-family: Space Grotesk;
    width: 330px;
    height: 300px;
    position:  relative;
    top: 15rem;
    right: 20%;
    font-weight: bold;
    gap: 10px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input{
        border-radius: 8px;
        height: 31px;
        padding-left: 3%;

        &:hover{
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        font-family: Space Grotesk;
        width: 330px;
        height: 300px;
        position:  relative;
        top: -17rem;
        right: 0%;
        font-weight: bold;
        gap: 10px;
    }
`
const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 10%;

    section{
        display: flex;
        flex-direction: column;

        div{
            display: flex;
            gap: 10px;


            input{
                width: 60px;
                height: 31px;
                border-radius: 8px;
            }
        }

        input{
            margin-top: 6%;
            border-radius: 8px;
            height: 31px;
            width: 150px;
        }
    }
`

const Formulario = () => {
    const {
        name, 
        cvc, 
        titular,
        dia, 
        mes,
        handleNameChange, 
        handleCvcChange, 
        handleTitularChange,
        handleMesChange,
        handleDiaChange,

    } =  useContext(Context) 

    return (
        <>
            <Form>
                <label htmlFor="nome">CARDHOLDER NAME</label>
                <input 
                required 
                type="text" 
                placeholder='e.g. Jane Appleseed' 
                maxLength={20} 
                value={titular}
                onChange={handleTitularChange}
                />


                <label htmlFor="numero">CARD NUMBER</label>
                <input 
                required 
                type="text" 
                placeholder='e.g. 1234 5678 9123 0000' 
                maxLength={16}
                value={name}
                onChange={handleNameChange}
                
                />
                
                <Div>
                    <section>
                        <label htmlFor="exp">EXP.DATE (MM/YY)</label>
                        <div>
                            <input 
                            required 
                            type="text" 
                            placeholder='MM' 
                            pattern="0[1-9]|1[0-2]"  
                            maxLength={2}
                            value={mes}
                            onChange={handleMesChange}
                             />
                            <input 
                            required 
                            type="text" 
                            placeholder='YY' 
                            pattern="0[1-9]|1[0-2]"  
                            maxLength={2}
                            value={dia}
                            onChange={handleDiaChange}
                            />
                        </div>
                    </section>
                    <section>
                        <label htmlFor="cvc">CVC</label>
                        <input 
                        required 
                        type="text" 
                        placeholder='e.g. 123' 
                        maxLength={3} 
                        value={cvc}
                        onChange={handleCvcChange}
                        />
                    </section>
                </Div>

                <Botao>Confirm</Botao>
            </Form>

        </>
    )
}

export default Formulario; 