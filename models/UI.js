import { questions } from "../data/questions.js"
import { Quiz } from "./Quiz.js";

export class UI {
    constructor() {

    }

    /**
     * 
     * @param {string} text question to render
     */
    'some button'
    showQuestion(text) {
        const quetionTitle = document.getElementById('question')
        quetionTitle.innerText = text
    }
    /**
     * 
     * @param {string[]} choices the chioces of the questions
     */
    showChoices(choices, callback) {

        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = ''
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'
            button.addEventListener('click', () => callback(choices[i]))
            choicesContainer.append(button)
        }
    }
    /**
     * 
     * @param {number} score the total score
     */
    showScore(score) {
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Tu puntaje es: ${score}</h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML
    }
    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total the total questions
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}