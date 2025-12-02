import { scienceQuestions } from "./utils.js"
import { historyQuestions } from "./utils.js"
import { geographyQuestions } from "./utils.js"
import { mathQuestions } from "./utils.js"
import { sportsQuestions } from "./utils.js"
import { englishQuestions } from "./utils.js"

//PEGANDO ELEMENTOS DO DOM
const titleQuestion = document.querySelector(".title-question")
const answersOptions = document.querySelectorAll(".option")
const nextQuestion = document.getElementById("next-question")
const bar = document.getElementById("progress-bar-fill")
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
let score = 0

function loadQuestion() {
  const question = selectedQuestions[currentQuestion]
  titleQuestion.textContent = question.question

  // Renderizando as questões
  answersOptions.forEach((option, index) => {
    const span = option.querySelector(".option-text")
    span.textContent = question.answers[index].text
    option.dataset.correct = question.answers[index].correct
  })

  let percentage = ((currentQuestion + 1) / selectedQuestions.length) * 100
  console.log(percentage)

  bar.style.width = `${percentage}%`
}

//CHECANDO SE A PERGUNTA ESTÁ CERTA OU ERRADA.

answersOptions.forEach((option) => {
  option.addEventListener("click", () => {
    nextQuestion.disabled = false

    if (option.dataset.correct === "true") {
      score++
    }

    answersOptions.forEach((opt) => {
      if (opt.dataset.correct === "true") {
        opt.classList.add("option-correct")
        opt.disabled = true
      } else if (opt.dataset.correct === "false") {
        opt.classList.add("option-incorrect")
        opt.disabled = true
      }
    })
  })
})

nextQuestion.addEventListener("click", () => {
  answersOptions.forEach((option) => {
    option.classList.remove("option-correct")
    option.classList.remove("option-incorrect")
    option.disabled = false
  })

  currentQuestion = currentQuestion + 1

  if (currentQuestion < selectedQuestions.length) {
    loadQuestion()
  } else {
    alert(`Fim de jogo, você acertou ${score}`)
    window.location.href = "./index.html"
  }

  nextQuestion.disabled = true
})

// PRÓXIMOS
startQuiz()
