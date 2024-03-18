import { useState, useEffect } from 'react';

function useCardNumber() {
  const [numeroCartao, setNumeroCartao] = useState('');

  // Função para atualizar o número do cartão
  const handleInputChange = (inputValue) => {
    // Remova espaços em branco do número do cartão
    const cartaoSemEspaco = inputValue.replace(/\s/g, '');
    setNumeroCartao(cartaoSemEspaco);
  };

  return {
    numeroCartao,
    handleInputChange
  };
}

export default useCardNumber;