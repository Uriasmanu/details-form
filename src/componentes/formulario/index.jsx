import styled from 'styled-components';
import Botao from '../botao';
import Cartao from '../cartao';


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

    return (
        <>
            <Form>
                <label htmlFor="nome">CARDHOLDER NAME</label>
                <input required type="text" placeholder='e.g. Jane Appleseed' />

                <label htmlFor="numero">CARD NUMBER</label>
                <input required type="text" placeholder='e.g. 1234 5678 9123 0000' />

                <Div>
                    <section>
                        <label htmlFor="exp">EXP.DATE (MM/YY)</label>
                        <div>
                            <input required type="number" placeholder='MM' />
                            <input required type="number" placeholder='YY' />
                        </div>
                    </section>
                    <section>
                        <label htmlFor="cvc">CVC</label>
                        <input required type="number" placeholder='e.g. 123' />
                    </section>
                </Div>

                <Botao>Confirm</Botao>
            </Form>

        </>
    )
}

export default Formulario; 