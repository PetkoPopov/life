import { clearTable } from "../clearTable.js"

let buttonClr = document.createElement('div')
buttonClr.addEventListener('click', () => {

    clearTable()

    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    circle.style.position = "fixed"
    // circle.style.position = "absolution"
    circle.style.left = "630px"
    circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.backgroundColor = "yellow"

    buttonClr.style.backgroundColor = "lightblue"
    buttonClr.appendChild(circle)

    setTimeout(() => {
        buttonClr.style.backgroundColor = "red"
        buttonClr.removeChild(circle)
    }, 300)

})
buttonClr.style.textAlign = 'center'
buttonClr.style.position = "fixed"
// buttonClr.style.position = "absolution"
buttonClr.style.left = "580px"
buttonClr.style.top = "10px"
buttonClr.style.width = "120px"
buttonClr.style.height = "60px"
buttonClr.style.border = "black solid 5px"
buttonClr.style.borderRadius = "20px"
buttonClr.style.boxShadow = "10px 6px darkolivegreen"
buttonClr.style.backgroundColor = "red"
buttonClr.style.fontSize = "125%"
buttonClr.textContent = 'ClearTable'

export { buttonClr }