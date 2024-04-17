function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipo.value == 'inferior'){
        comprarInferior(qtd);
    }else{
        if (tipo.value == 'superior'){
            comprarSuperior(qtd)
        }else{
            comprarPista(qtd);
        }
    }
}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById ('qtd-inferior').textContent);
   if (qtd > qtdInferior){
    alert ('Quantidade indisponivel');
   }else{
    qtdInferior = qtdInferior - qtd ;
    document.getElementById ('qtd-inferior').textContent = qtdInferior;
    qtdIngressos = qtd>1? 'ingressos' :'ingresso';
    alert (`Compra bem sucedida! Você comprou ${qtd} ${qtdIngressos}.`);
   }
}
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById ('qtd-superior').textContent)
    if(qtd > qtdSuperior){
        alert ('Quantidade indisponivel')
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById ('qtd-superior').textContent= qtdSuperior;
        qtdIngressos = qtd>1? 'ingressos' :'ingresso';
        alert (`Compra bem sucedida! Você comprou ${qtd} ${qtdIngressos}.`);
    }
}
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert('Quantidade insdisponivel')
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        qtdIngressos = qtd>1? 'ingressos' :'ingresso';
        alert (`Compra bem sucedida! Você comprou ${qtd} ${qtdIngressos}.`);
    }

}