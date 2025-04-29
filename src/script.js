// const gamesFetch = require('../src/services/gamesFetch')


async function gerarSequencia() {
  
  fetch('http://localhost:3000/game/2')
  .then((res) => res.json())
  .then((res) => {
    res.forEach(sequencia => {
    const sequenciaGerada = document.createElement("p");
    sequenciaGerada.innerHTML = sequencia.map(num => `<span class="circulo">${num}</span>`).join(" ");
    sequenciasGeradas.appendChild(sequenciaGerada)
  });
})
}
const botaoGerarSequencia = document.querySelector("#gerarSequencia");
botaoGerarSequencia.addEventListener("click", gerarSequencia);



// async function gerarSequencia() {
  
//   let sequencias = await gamesFetch()
//   console.log(sequencias);
//   // return sequencias
//   sequencias.ay.forEach(sequencia => {
//     const sequenciaGerada = document.createElement("p");
//     sequenciaGerada.innerHTML = sequencia.map(num => `<span class="circulo">${num}</span>`).join(" ");
//     sequenciasGeradas.appendChild(sequenciaGerada);
//   });
// }
// console.log(gerarSequencia());
// const botaoGerarSequencia = document.querySelector("#gerarSequencia");
// botaoGerarSequencia.addEventListener("click", gerarSequencia);