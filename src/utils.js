/*RESUMINDO A ESTRUTURA
- Variável chamada scienceQuestions que guarda um Array
- Dentro desse Array, cada item é um objeto. Cada objeto representa uma pergunta completa.
- Dentro de cada objeto-pergunta, tem duas chaves (propriedades)
  - A propriedade question que guarda um texto
  - A propriedade "answers" que guarda  um outro array.
    - E dentro desse Array de respostas, cada item é umObjeto com as propriedades "text" e "correct"*/

const scienceQuestions = [
  {
    question: "Qual é o planeta mais próximo do sol?",
    answers: [
      { text: "Vênus", correct: false },
      { text: "Marte", correct: false },
      { text: "Mercúrio", correct: true },
      { text: "Terra", correct: false },
    ],
  },
  {
    question:
      "As plantas produzem seu próprio alimento através de qual processo?",
    answers: [
      { text: "Respiração", correct: false },
      { text: "Digestão", correct: false },
      { text: "Fotossíntese", correct: true },
      { text: "Fermentação", correct: false },
    ],
  },
  {
    question: "Qual dessas é uma fonte de energia renovável",
    answers: [
      { text: "Carvão", correct: false },
      { text: "Petróleo", correct: false },
      { text: "Energia Solar", correct: true },
      { text: "Gás Natural", correct: false },
    ],
  },
]
