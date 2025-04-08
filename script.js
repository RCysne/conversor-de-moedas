const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector("main footer")
const description = document.getElementById("description");
const result = document.getElementById("result");

// Cotação das moedas
const usPrice = 5.67;
const euroPrice = 6.04;
const libraPrice = 8.77;


// Recebendo o input e validando com regex, e caso tenha alguma letra, corrigir com o replace que vai aplicar a regra criada no regex
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
})






// Submissão do formulário com uma condicional e chamada da função
form.onsubmit = (event) => {
  event.preventDefault();

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

  console.log(amount, price, symbol)

  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    console.log(total)
    total = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`
    footer.classList.add("show-result")
  } catch (error) {
    
    footer.classList.remove("show-result")
    
    console.log(error)
    alert('Erro no código')
  }

}


function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
