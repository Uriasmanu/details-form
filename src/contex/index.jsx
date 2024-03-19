import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export function ContextProvider ({children}){
  const [name, setName] = useState('');
  const [titular, setTitular] = useState('');
  const [cvc, setCvc] = useState('');
  const [mes, setMes] = useState('');
  const [dia, setDia] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value);

    };

    const handleTitularChange = (event) => {
      setTitular(event.target.value);

    };

    const handleCvcChange = (event) => {
      setCvc(event.target.value);

    };

  const handleMesChange = (event) => {
    const enteredMonth = event.target.value.trim();
    // Verificar se o valor inserido é vazio ou se está entre 1 e 12 ou se é um número de 1 a 9 com um único dígito
    if (enteredMonth === '' || (!isNaN(enteredMonth) && (parseInt(enteredMonth, 10) >= 1 && parseInt(enteredMonth, 10) <= 12) || enteredMonth.length === 1)) {
      setMes(enteredMonth);
    }
  };

  const handleDiaChange = (event) => {
      setDia(event.target.value);

    };

    
  return(
    <Context.Provider 
    value={{
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

      }}>

      { children}
    </Context.Provider>
  )
}
