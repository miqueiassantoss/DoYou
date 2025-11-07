import { scienceQuestions } from "./utils.js"
import { historyQuestions } from "./utils.js"
import { geographyQuestions } from "./utils.js"
import { mathQuestions } from "./utils.js"
import { sportsQuestions } from "./utils.js"
import { englishQuestions } from "./utils.js"

//PEGANDO ELEMENTOS DO DOM
const titleQuestion = document.querySelector(".title-question")
const answersOptions = document.querySelectorAll(".option")
// const startButtons = document.querySelectorAll(".start-game")

function startQuiz() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const theme = urlParams.get("tema")

  if (theme === "ciencia") {
    selectedQuestions = scienceQuestions
  } else if (theme === "historia") {
    selectedQuestions = historyQuestions
  } else if (theme === "geografia") {
    selectedQuestions = geographyQuestions
  } else if (theme === "matematica") {
    selectedQuestions = mathQuestions
  } else if (theme === "esportes") {
    selectedQuestions = sportsQuestions
  } else if (theme === "ingles") {
    selectedQuestions = englishQuestions
  }

  loadQuestion()
}

let selectedQuestions = null
let currentQuestion = 0

function loadQuestion() {
  const question = selectedQuestions[currentQuestion]
  titleQuestion.textContent = question.question

  // Renderizando as questões
  answersOptions.forEach((option, index) => {
    const span = option.querySelector(".option-text")
    span.textContent = question.answers[index].text
    option.dataset.correct = question.answers[index].correct
  })
}


//CHECANDO SE A PERGUNTA ESTÁ CERTA OU ERRADA.
answersOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.dataset.correct === "true") {
      option.classList.add("option-correct")
    } else {
      option.classList.add("option-incorrect")
    }
  })
})


// PRÓXIMOS
startQuiz()
