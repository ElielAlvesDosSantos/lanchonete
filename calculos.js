function calcularValorTotal() {
    // Obter os valores informados pelo usuário
    var qtdCachorroQuente = parseInt(document.getElementById("qtdCachorroQuente").value);
    var qtdMistoQuente = parseInt(document.getElementById("qtdMistoQuente").value);
    var qtdBauru = parseInt(document.getElementById("qtdBauru").value);
    var qtdCheeseBurguer = parseInt(document.getElementById("qtdCheeseBurguer").value);
    var qtdCheeseEgg = parseInt(document.getElementById("qtdCheeseEgg").value);
    var qtdCheeseFrango = parseInt(document.getElementById("qtdCheeseFrango").value);
    var qtdRefrigerante = parseInt(document.getElementById("qtdRefrigerante").value);
    var qtdSucoFrutas = parseInt(document.getElementById("qtdSucoFrutas").value);
    var qtdCafeMedio = parseInt(document.getElementById("qtdCafeMedio").value);
    var qtdCafeLeite = parseInt(document.getElementById("qtdCafeLeite").value);

    // Calcular o valor total do pedido
    var valorTotal = (qtdCachorroQuente * 7.9) + (qtdMistoQuente * 5.75) + (qtdBauru * 11.35) +
                     (qtdCheeseBurguer * 14.6) + (qtdCheeseEgg * 15.4) + (qtdCheeseFrango * 12.9) +
                     (qtdRefrigerante * 4.9) + (qtdSucoFrutas * 4.3) + (qtdCafeMedio * 3.5) +
                     (qtdCafeLeite * 4.2);

    // Aplicar o desconto de 5%, caso o valor total seja superior a R$100,00
    if (valorTotal > 100) {
        valorTotal = valorTotal * 0.95;
    }

    // Exibir o valor total na tela
    document.getElementById("valorTotal").innerHTML = "Valor total do pedido: R$" + valorTotal.toFixed(2);
}