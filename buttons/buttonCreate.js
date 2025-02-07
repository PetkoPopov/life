import { makeTable } from "../makeTable.js"

let button = document.createElement('div')

button.addEventListener('click', () => {


    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    // circle.style.position = "fixed"
    circle.style.position = "relative"
    // circle.style.left = "470px"
    // circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.textAlign = "center"
    circle.style.backgroundColor = 'red'

    let rows = document.getElementById("input-hor")

    let cols = document.getElementById('input-ver')

    makeTable(Number(rows.textContent), Number(cols.textContent))
    button.style.backgroundColor = "yellow"

    button.appendChild(circle)
    setTimeout(() => {

        button.style.backgroundColor = "lightgreen"
        button.removeChild(circle)
    }, 300)
})
button.style.textAlign = 'center'
// button.style.position = "fixed"
button.style.position = "relative"
// button.style.left = "420px"
// button.style.top = "10px"
button.style.width = "120px"
button.style.height = "60px"
button.style.border = "black solid 5px"
button.style.borderRadius = "20px"
button.style.boxShadow = "10px 6px darkolivegreen"
button.style.backgroundColor = "lightgreen"
button.style.fontSize = "125%"
button.textContent = "CreateTable"

export {
    button
}