import styled from 'styled-components';

const Button = styled.button`
    background:  hsl(278, 68%, 11%);
    color: white;
    height: 35px;
    border-radius: 8px;
`

const Botao = ({children}) =>{
    return(
        <Button>{children}</Button>
    )
}

export  default Botao; 