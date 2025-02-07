import { interval } from "../startGame.js"
import { stopGame } from "../stopGame.js"

let buttonStop = document.createElement('div')

buttonStop.addEventListener('click', () => {

    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    // circle.style.position = "fixed"
    circle.style.position = "relative"
    // circle.style.left = "1050px"
    // circle.style.top = "25px"
    circle.style.padding = '1%'
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
buttonStop.style.textAlign = 'center'
// buttonStop.style.position = "fixed"
buttonStop.style.position = "relative"
// buttonStop.style.left = "1000px"
// buttonStop.style.top = "10px"
buttonStop.style.width = "120px"
buttonStop.style.height = "60px"
buttonStop.style.border = "black solid 5px"
buttonStop.style.borderRadius = "20px"
buttonStop.style.boxShadow = "10px 6px darkolivegreen"
buttonStop.style.backgroundColor = "lightgreen"
buttonStop.style.fontSize = "125%"
buttonStop.textContent = "StopGame"


export { buttonStop }