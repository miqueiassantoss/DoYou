import { scienceQuestions } from "./utils.js"
import { historyQuestions } from "./utils.js"
import { geographyQuestions } from "./utils.js"
import { mathQuestions } from "./utils.js"
import { sportsQuestions } from "./utils.js"
import { englishQuestions } from "./utils.js"

//PEGANDO ELEMENTOS DO DOM
const titleQuestion = document.querySelector(".question-card")
const answersOptions = document.querySelectorAll(".option-text")
const startButtons = document.querySelectorAll(".start-game")



let selectedQuestions = null

function startQuiz() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const theme = urlParams.get("tema")

  if (theme === "ciencia") {
    selectedQuestions = scienceQuestions
    console.log("Vamos começar o quiz de Ciência")
  } else if (theme === "historia") {
    selectedQuestions = historyQuestions
    console.log("Vamos estudar História")
  } else if (theme === "geografia") {
    selectedQuestions = geographyQuestions
    console.log("Vamos estudar geografia")
  } else if (theme === "matematica") {
    selectedQuestions = mathQuestions
    console.log("Vamos estudar Matemática")
  } else if (theme === "esportes") {
    selectedQuestions = sportsQuestions
    console.log("Vamos estudar esportes")
  } else if (theme === "ingles") {
    console.log("Vamos estudar inglês")
    selectedQuestions = englishQuestions
  }

  loadQuestion()
}

function loadQuestion() {
  console.log("A função loadQuestion foi chamada")
  console.log("As perguntas a serem usadas são:", selectedQuestions)
}

startQuiz()
