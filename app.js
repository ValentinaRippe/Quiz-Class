//@ts-check
import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz the main quiz objet
 * @param {UI} ui ui object
 */

const renderPage = (quiz, ui) => {
    if (quiz.inEnded()) {
        ui.showScore(quiz.score)
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showProgress(quiz.questionsIndex + 1, quiz.questions.length)
        ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
            quiz.guess(currenChoice)
            renderPage(quiz, ui)
        })
    }
}

function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz, ui)
}
main() 