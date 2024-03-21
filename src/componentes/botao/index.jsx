import styled from 'styled-components';

const Button = styled.button`
    background:  hsl(278, 68%, 11%);
    color: white;
    height: 35px;
    border-radius: 8px;

    @media only screen and (max-width: 600px) {
        height: 55px;
    }
`

const Botao = ({children}) =>{
    return(
        <Button>{children}</Button>
    )
}

export  default Botao; 