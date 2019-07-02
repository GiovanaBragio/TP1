let navEl = document.querySelector('nav');
let abreNavEl = document.querySelector('#abreNav');
let fechaNavEl = document.querySelector('#fechaNav');
let abreAutoresEl = document.querySelector('#abreAutores');
let fechaAutoresEl = document.querySelector('#fechaAutores');
let fundoEscuroEl = document.querySelector('#fundoEscuro');
let modalEl = document.querySelector('#autores');
let nomeAutor = document.querySelector('#textoNomeAutor');
let imagensAutores = document.querySelectorAll('.imgAutores');

function fxAbreNav () {
  navEl.style.left = "0vw";
  fundoEscuroEl.style.display = "block";
}

function fxFechaNav () {
  navEl.style.left = "-20vw";
  fundoEscuroEl.style.display = "none";
}

function fxAbreAutores () {
  modalEl.style.display = "block";
  fundoEscuroEl.style.display = "block";
}

function fxFechaAutores () {
  modalEl.style.display = "none";
  fundoEscuroEl.style.display = "none";
}

function mostraNomeAutor (e) {
  nomeAutor.innerHTML = e.currentTarget.alt;
}

function escondeNomeAutor () {
  nomeAutor.innerHTML = '';
}

abreNavEl.addEventListener('click', fxAbreNav);
fechaNavEl.addEventListener('click', fxFechaNav);
abreAutoresEl.addEventListener('click', fxAbreAutores);
fechaAutoresEl.addEventListener('click', fxFechaAutores);

for(let imagem of imagensAutores){
  imagem.addEventListener('mouseover', mostraNomeAutor);
  imagem.addEventListener('mouseout', escondeNomeAutor);
}
