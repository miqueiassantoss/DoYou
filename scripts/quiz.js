import { scienceQuestions } from "./utils.js"
import { historyQuestions } from "./utils.js"
import { geographyQuestions } from "./utils.js"
import { mathQuestions } from "./utils.js"
import { sportsQuestions } from "./utils.js"
import { englishQuestions } from "./utils.js"

//Aqui estamos pegando a matéria. Cogite colocar isso dentro de uma função depois.
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const theme = urlParams.get("tema")

let selectedQuestions = null

if (theme === "ciencia") {
  selectedQuestions = scienceQuestions
  console.log("Vamos começar o quiz de Ciência")
  console.log(selectedQuestions)

} else if (theme === "historia") {
  selectedQuestions = historyQuestions
  console.log("Vamos estudar História")
  console.log(selectedQuestions)

} else if (theme === "geografia") {
  selectedQuestions = geographyQuestions
  console.log("Vamos estudar geografia")
  console.log(selectedQuestions)

} else if (theme === "matematica") {
  selectedQuestions = mathQuestions
  console.log("Vamos estudar Matemática")
  console.log(selectedQuestions)

} else if (theme === "esportes") {
  selectedQuestions = sportsQuestions
  console.log("Vamos estudar esportes")
  console.log(selectedQuestions)
  
} else if (theme === "ingles") {
  console.log("Vamos estudar inglês")
  selectedQuestions = englishQuestions
  console.log(selectedQuestions)
}
