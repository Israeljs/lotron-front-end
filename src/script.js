// const gamesFetch = require('../src/services/gamesFetch')

async function fetcher() {
  const response = await fetch('http://localhost:3000/game/5')
  const games = await response.json();
  return games;
}

function gerarSequencia() {
  fetcher().then((response) => response.forEach(sequencia => {
    const sequenciaGerada = document.createElement("p");
    sequenciaGerada.innerHTML = sequencia.map(num => `<span class="circulo">${num}</span>`).join(" ");
    sequenciasGeradas.appendChild(sequenciaGerada)
  }))
}

const botaoGerarSequencia = document.querySelector("#gerarSequencia");
botaoGerarSequencia.addEventListener("click", gerarSequencia);
