import { startGame } from "../startGame.js"

let buttonStart = document.createElement('div')
buttonStart.setAttribute('class', 'btn')
buttonStart.addEventListener('click', () => {
    let audio = document.getElementsByTagName('audio')[0]
    audio.play()
    let rows = document.getElementById("input-hor")
    let cols = document.getElementById('input-ver')

    startGame(Number(rows.textContent), Number(cols.textContent))

    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    // circle.style.position = "fixed"
    circle.style.position = "absolute"
    // circle.style.left = "880px"
    // circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.fontSize = "40px"
    circle.style.backgroundColor = "yellow"


    buttonStart.style.backgroundColor = "lightblue"
    buttonStart.appendChild(circle)
    setTimeout(() => {

        buttonStart.style.backgroundColor = "red"
        buttonStart.removeChild(circle)

    }, 700)
})

buttonStart.textContent = "StartGame"

export {
    buttonStart
}