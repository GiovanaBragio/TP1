let botaoComeco = document.querySelector("#comecar");
let botaoProxima = document.querySelector("#proximo");
let questaoAtual = 0;

function proxima(){
    if(questaoAtual!=1){
        let inicio = document.querySelector('#questao'+(questaoAtual));
        inicio.classList.add("escondido");

        let proximaQuestao = document.querySelector('#questao'+(questaoAtual+1));
        proximaQuestao.classList.remove("escondido");
      
        botaoProxima.classList.remove("escondido");

    }
    else{
        let quimica = document.querySelector('#resultado');
        quimica.classList.remove("escondido");
        let questao = document.querySelector('#questao'+(questaoAtual));
        questao.classList.add("escondido");
        botaoProxima.classList.add("escondido");
        let results = document.querySelector('#mensagem');
        let escolheSigno = document.querySelector('[name="questao'+questaoAtual+'"]:checked').value;
        if(escolheSigno=='0'){
            results.innerHTML = '"Você não é potássio mas vem K"';
            results.style.color = "#aaff01";
        }
        else if(escolheSigno=='1'){
            results.innerHTML = '"Gatx, Acho que esses elementos querem te dizer alguma coisa: Európio (Eu) Telúrio (Te) Amerício (Am) Oxigênio (O)."'
            results.style.color = "#00AAFF";
        }
        else if(escolheSigno=='2'){
            results.innerHTML = '"Gata, você não é periódica, mas você ta-bela."';
            results.style.color = "#AA00FF";
        }
        else if(escolheSigno=='3'){
            results.innerHTML = '"Amor, nossa química me deixou sem reação."';
            results.style.color = "#FF00AA";
        }
        else if(escolheSigno=='4'){
            results.innerHTML = '"Vem cá e me Cobre de amor!"';
            results.style.color = "#aaff01";
        }
        else if(escolheSigno=='5'){
            results.innerHTML = '"Me chama de tabela periódica e diz que rola química entre nós."';
            results.style.color = "#00AAFF";
            
        }
        else if(escolheSigno=='6'){
            results.innerHTML = '"Esquece o Hidrogênio porque você é meu elemento número 1."';
            results.style.color = "#AA00FF";
        }
        else if(escolheSigno=='7'){
            results.innerHTML = '"Se você fosse um elemento, seria o Francium porque é o mais atraente."';
            results.style.color = "#FF00AA";
        }
        else if(escolheSigno=='8'){
            results.innerHTML = '"Seu nome por acaso é berílio-berílio? Porque você é um Be-Be."';
            results.style.color = "#aaff01";
        }
        else if(escolheSigno=='9'){
            results.innerHTML = '"Você não é uma mistura homogênea, mas é a solução para minha vida!"';
            results.style.color = "#00AAFF";
        }
        else if(escolheSigno=='10'){
            results.innerHTML = '"Me chama de tabela periódica e diz que rola química entre nós."';
            results.style.color = "#AA00FF";
        }
        else if(escolheSigno=='11'){
            results.innerHTML = '"Você não é potássio mas vem K"';
            results.style.color = "#FF00AA";
        }
    }
    

    questaoAtual++;
}

botaoProxima.addEventListener('click',proxima);
botaoComeco.addEventListener('click',proxima);