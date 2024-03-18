import styled from 'styled-components';
import Botao from '../botao';
import { useState } from 'react';

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

    const [name, setName] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);

      const inputValue = event.target.value;
      if (inputValue.length >= 4) {
        const parte1 = inputValue.substring(0, 4);
          const parte2 = inputValue.substring(4, 8);
          const parte3 = inputValue.substring(8, 12);
          const parte4 = inputValue.substring(12, 16);

          console.log('Parte 1:', parte1);
          console.log('Parte 2:', parte2);
          console.log('Parte 3:', parte3);
          console.log('Parte 4:', parte4);
      }
    };
  

    return (
        <>
            <Form>
                <label htmlFor="nome">CARDHOLDER NAME</label>
                <input 
                required 
                type="text" 
                placeholder='e.g. Jane Appleseed' 
                maxLength={20} 
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
                            <input required type="text" placeholder='MM' pattern="0[1-9]|1[0-2]"  maxLength={2} />
                            <input required type="text" placeholder='YY' pattern="0[1-9]|1[0-2]"  maxLength={2} />
                        </div>
                    </section>
                    <section>
                        <label htmlFor="cvc">CVC</label>
                        <input required type="text" placeholder='e.g. 123' maxLength={3} />
                    </section>
                </Div>

                <Botao>Confirm</Botao>
            </Form>

        </>
    )
}

export default Formulario; 