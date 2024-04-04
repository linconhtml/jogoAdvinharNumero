mensagemInicial();
let listaNumeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativa = 1;





function exibirTextoTela (tag, texto){
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}

function mensagemInicial(){
exibirTextoTela ("h1", "jogo numero secreto");
exibirTextoTela ("p", "digite um numero de 1 a 10");
}



function gerarNumeroAleatorio() {
  let numeroEscolhido= parseInt (Math.random()*10 + 1);
  let tamanhoLista = listaNumeroSorteados.length;

    if(tamanhoLista == 10){
        listaNumeroSorteados = [];
    }

  if (listaNumeroSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
  } else{
    listaNumeroSorteados.push(numeroEscolhido);
    console.log(listaNumeroSorteados);
    return numeroEscolhido;
  }
    
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value =  " ";
}

function verificarChute (){

    let chute = document.querySelector("input").value;

        if (chute==numeroSecreto) {

        let palavraTentativa = numeroTentativa >1 ? "tentativas": "tentativa";
        let mernsagemTentativa = `voce descobriu o numero em ${numeroTentativa} ${palavraTentativa}`;
        exibirTextoTela ("h1", 'parabens, voce acertou');
        exibirTextoTela("p", mernsagemTentativa);
        document.getElementById("reiniciar").removeAttribute('disabled');
        var botao = document.getElementById("chutar");
        botao.disabled= true;
        limparCampo;
           
    }
    else {
        exibirTextoTela ("h1", 'que pena, errou');
        if (chute>numeroSecreto){
        exibirTextoTela("p", "o numero é menor");
        limparCampo(); 
        	}

        else {
        exibirTextoTela("p", "o numero é maior");
        limparCampo(); 
        }
        numeroTentativa++;
    }

    
}

        function zerarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        numeroTentativa = 1;
        limparCampo();
        mensagemInicial();
        document.getElementById("reiniciar").setAttribute("disabled", true);
        document.getElementById("chutar").removeAttribute("disabled");

    }
    

