import { clearTable } from "../clearTable.js"

let buttonClr = document.createElement('div')
buttonClr.setAttribute('class','btn')
buttonClr.addEventListener('click', () => {

    clearTable()

    let circle = document.createElement('div')
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    circle.style.position = "absolute"
    // circle.style.position = "absolution"
    // circle.style.left = "630px"
    // circle.style.top = "25px"
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

buttonClr.textContent = 'ClearTable'

export { buttonClr }