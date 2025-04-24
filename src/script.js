const gamesFetch = require('../src/services/gamesFetch')

async function gerarSequencia() {
  
  let sequencias = await gamesFetch()
  console.log(sequencias);
  // return sequencias
  sequencias.forEach(sequencia => {
    const sequenciaGerada = document.createElement("p");
    sequenciaGerada.innerHTML = sequencia.map(num => `<span class="circulo">${num}</span>`).join(" ");
    sequenciasGeradas.appendChild(sequenciaGerada);
  });
}
console.log(gerarSequencia());
const botaoGerarSequencia = document.querySelector("#gerarSequencia");
botaoGerarSequencia.addEventListener("click", gerarSequencia);