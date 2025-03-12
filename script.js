const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

const usPrice = 5.67;
const euroPrice = 6.04;
const libraPrice = 8.77;


// Recebendo o input e validando com regex, e caso tenha algum número, corrigir com o replace
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.replace(hasCharactersRegex, "");
  
  console.log(amount)
})

// Submissão do formulário com uma condicional e chamada da função
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);

  switch (currency.value) {
      case 'USD':
        convertCurrency(amount.value, usPrice, "US$")
        break
      case "EUR":
        convertCurrency(amount.value, euroPrice, '€')
        break
      case 'GBP':
        convertCurrency(amount.value, libraPrice, '£')
        break
  }

  
}

// Função de conversão da moeda e inserção do símbolo
function convertCurrency(amount, price, symbol) {
  // console.log(amount, price, symbol);
  const result = `${symbol} ${amount*price}`
  console.log(result)
  return result
}
