import { interval } from "../startGame.js"
import { stopGame } from "../stopGame.js"

let buttonStop = document.createElement('div')
buttonStop.setAttribute('class', "btn")
buttonStop.addEventListener('click', () => {
    let audio = document.getElementsByTagName('audio')[0]
    audio.pause()
    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    // circle.style.position = "fixed"
    circle.style.position = "absolute"
    // circle.style.left = "1050px"
    // circle.style.top = "25px"
    // circle.style.padding = '1%'
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.textAlign = "center"
    circle.style.backgroundColor = 'red'

    stopGame(interval)
    buttonStop.style.backgroundColor = "yellow"

    buttonStop.appendChild(circle)
    setTimeout(() => {

        buttonStop.style.backgroundColor = "rgb(169, 233, 50)"
        buttonStop.removeChild(circle)
    }, 300)
})

buttonStop.textContent = "StopGame"


export { buttonStop }