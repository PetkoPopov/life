import { startGame } from "../startGame.js"

let buttonStart = document.createElement('div')
buttonStart.addEventListener('click', () => {

    let rows = document.getElementById("input-hor")
    let cols = document.getElementById('input-ver')
    
    startGame(Number(rows.textContent), Number(cols.textContent))

    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    circle.style.position = "fixed"
    circle.style.left = "880px"
    circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.fontSize = "40px"
    circle.style.backgroundColor = "yellow"


    buttonStart.style.backgroundColor = "lightblue"
    buttonStart.appendChild(circle)
    setTimeout(() => {

        buttonStart.style.backgroundColor = "red"
        buttonStart.removeChild(circle)

    }, 300)
})
buttonStart.style.textAlign = 'center'
buttonStart.style.position = "fixed"
buttonStart.style.left = "830px"
buttonStart.style.top = "10px"
buttonStart.style.width = "120px"
buttonStart.style.height = "60px"
buttonStart.style.border = "black solid 5px"
buttonStart.style.borderRadius = "20px"
buttonStart.style.boxShadow = "10px 6px darkolivegreen"
buttonStart.style.backgroundColor = "red"
buttonStart.style.fontSize = "125%"
buttonStart.textContent = "StartGame"

export{
    buttonStart
}