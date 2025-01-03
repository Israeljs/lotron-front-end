function gerarSequencia() {
  let sequencias = [
    [
      2, 4, 6, 7, 8, 10,
      12, 15, 16, 17, 21, 22,
      23, 24, 25
    ],
    [
      1, 2, 3, 6, 7, 8,
      10, 13, 14, 15, 16, 18,
      22, 23, 25
    ],
    [
      1, 4, 5, 7, 8, 9,
      10, 11, 13, 15, 16, 18,
      21, 23, 25
    ],
    [
      1, 2, 3, 5, 6, 9,
      10, 12, 14, 16, 17, 18,
      19, 22, 25
    ],
    [
      2, 4, 5, 7, 8, 10,
      11, 12, 14, 16, 18, 19,
      21, 23, 24
    ],
    [
      1, 2, 6, 7, 10, 11,
      12, 14, 16, 17, 18, 20,
      23, 24, 25
    ],
    [
      1, 3, 4, 5, 8, 10,
      11, 13, 15, 18, 19, 20,
      22, 23, 24
    ],
    [
      1, 3, 4, 5, 6, 9,
      10, 11, 12, 13, 14, 16,
      17, 20, 23
    ],
    [
      2, 3, 5, 6, 7, 8,
      10, 13, 15, 16, 17, 19,
      20, 23, 24
    ],
    [
      3, 4, 5, 6, 7, 9,
      10, 11, 13, 14, 16, 20,
      21, 23, 25
    ]
  ]

  sequencias.forEach(sequencia => {
    const sequenciaGerada = document.createElement("p");
    sequenciaGerada.innerHTML = sequencia.map(num => `<span class="circulo">${num}</span>`).join(" ");
    sequenciasGeradas.appendChild(sequenciaGerada);
  });
}

const botaoGerarSequencia = document.querySelector("#gerarSequencia");
botaoGerarSequencia.addEventListener("click", gerarSequencia);