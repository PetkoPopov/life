import { makeTable } from "../makeTable.js"

let button = document.createElement('div')
    button.setAttribute('class', 'btn')
button.addEventListener('click', () => {


    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    // circle.style.position = "fixed"
    circle.style.position = "absolute"
    // circle.style.left = "60px"
    // circle.style.top = "30px"
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

button.textContent = "CreateTable"

export {
    button
}