let botaoComeco = document.querySelector("#comecar");
let botaoProxima = document.querySelector("#proximo");
let questaoAtual = 0;
let somaPontos = 0;

function proximaPergunta(){
    if(questaoAtual!=11){
        let inicio = document.querySelector('#questao'+(questaoAtual));
        inicio.classList.add("escondido");
        if(questaoAtual!=10){
            let proximaQuestao = document.querySelector('#questao'+(questaoAtual+1));
            proximaQuestao.classList.remove("escondido");
        }
        if(questaoAtual!=0){
            let questaoCheck = document.querySelector('[name="questao'+questaoAtual+'"]:checked').value;
            let questao = Number(questaoCheck);
            
            somaPontos += questao;
        }
        else{
            botaoProxima.classList.remove("escondido");
        }
    }
    if(questaoAtual==10){
     
        let quimica = document.querySelector('#quimico');
        quimica.classList.remove("escondido");
        let questao = document.querySelector('#questao'+(questaoAtual));
        questao.classList.add("escondido");
        botaoProxima.classList.add("escondido");
        let results = document.querySelector('#resultado');
        let pontuacao = somaPontos;
        results.innerHTML = `Você acertou ${pontuacao}/10.`;
        let comen = document.querySelector('#coment');
        let imagem = document.querySelector('#img-coment');

        if(pontuacao<=3){
            comen.innerHTML = '"Kkkkk que pontuaçãozinha mixuruca" - CURIE,Marie';
            results.style.color = "#00AAFF";
            comen.style.color = "#00AAFF";
            imagem.style.width = "30%;"
        }
        else if(pontuacao>=8 && pontuacao<=10){
            imagem.src = 'img/linusPauling.jpg'
            comen.innerHTML = '"Putz nega, o auge" - PAULING,Linus';
            results.style.color = " #AA00FF";
            comen.style.color = " #AA00FF";
            imagem.style.width = "42%;"

        }
        else if(pontuacao==6 || pontuacao==7){
            imagem.src = 'img/Lavoisier.jpg'
            comen.innerHTML = '"Quase lá. Força, guerreiro." - LAVOISIER, Antoine';
            results.style.color = "#FF00AA";
            comen.style.color = "#FF00AA";
            imagem.style.width = "28%;"

        }
        else{
            imagem.src = 'img/Dalton_John.jpg'
            comen.innerHTML = '"Que flop, hein?!" - DALTON, John';
            results.style.color = "#AAFF01";
            comen.style.color = "#AAFF01";
            imagem.style.width = "35%";

        }

        
    }

    questaoAtual++;
}

botaoProxima.addEventListener('click',proximaPergunta);
botaoComeco.addEventListener('click',proximaPergunta);