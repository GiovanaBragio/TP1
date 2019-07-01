//RENOMEAR O ARQUIVO PARA "jsrataria.js"
let input = document.getElementById('input')
let output = document.getElementById('output')
let butao = document.getElementById('butao')
butao.addEventListener("click",function(){
  mudavalor(input.value)
})

let pagina = {
    nihônio:"nihonio.html",
    tenesso:"tenesso.html",
    moscóvio:"moscovio.html",
    oganessônio:"oganessonio.html", 
    inicial: "index.html",
    referencias: "referencias.html",
    curiosidades: "curiosidades.html",
    quizes: "testes.html"
}

 function mudavalor(string) {
   let j = input.value.toLocaleLowerCase()
  if(j in pagina){
    location.href = pagina[j];
  }
  else{
    output.classList.remove("escondido");
  }
}
  $( function() {
    let availableTags = [
      "nihônio",
      "tenesso",
      "moscóvio",
      "oganessônio",
      "inicial",
      "referencias",
      "curiosidades",
      "quizes"
    ];
    $( "#input" ).autocomplete({
      source: availableTags,
    });
  } );

  output.value.addEventListener("click",mudavalor);
