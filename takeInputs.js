import { clearTable } from "./clearTable.js"
import { makeTable } from "./makeTable.js"



var hor = document.getElementById('input-hor')

hor.style.width = "120px"
hor.style.height = "60px"
hor.style.fontSize = "40px"
hor.style.textAlign = "center"
hor.style.border = "black solid 5px"
hor.style.borderRadius = "20px"
hor.style.boxShadow = "10px 6px darkolivegreen"
hor.style.backgroundColor = "yellow"


let count = 10
hor.addEventListener("wheel", () => {
    count = count + 10
    hor.textContent = count
})
hor.addEventListener('click', () => {
    count = 0
    hor.textContent = count
    hor.style.backgroundColor = "lightgreen"

    setTimeout(() => {
        hor.style.backgroundColor = "yellow"
    }, 300)
})

var ver = document.getElementById('input-ver')
ver.style.position = "fixed"
ver.style.left = "250px"
ver.style.top = "10px"
ver.style.width = "120px"
ver.style.height = "60px"
ver.style.fontSize = "40px"
ver.style.textAlign = "center"
ver.style.border = "black solid 5px"
ver.style.borderRadius = "20px"
ver.style.boxShadow = "10px 6px darkolivegreen"
ver.style.backgroundColor = "yellow"

let countVer = 10
ver.addEventListener("wheel", () => {
    countVer = countVer + 10
    ver.textContent = countVer
})
ver.addEventListener('click', () => {
    ver.style.backgroundColor = "lightgreen"
    countVer = 0
    ver.textContent = countVer
    setTimeout(() => {
        ver.style.backgroundColor = "yellow"
    }, 300)
})
let body = document.getElementsByTagName("body")[0]

let circle = document.createElement('div')

circle.style.backgroundColor = "red"

let button = document.createElement('div')

button.addEventListener('click', () => {
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    circle.style.position = "fixed"
    circle.style.left = "470px"
    circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.fontSize = "40px"
    circle.style.textAlign = "center"
    circle.style.backgroundColor='red'
    let rows = Number(hor.textContent)
    let cols = Number(ver.textContent)
    
    makeTable(rows, cols)
    button.style.backgroundColor = "yellow"
      
    button.appendChild(circle)
    setTimeout(() => {
        button.textContent = ' '
        button.style.backgroundColor = "lightgreen"
        button.removeChild(circle)
    }, 300)
})
button.style.textAlign = 'center'
button.style.position = "fixed"
button.style.left = "420px"
button.style.top = "10px"
button.style.width = "120px"
button.style.height = "60px"
button.style.fontSize = "40px"
button.style.textAlign = "center"
button.style.border = "black solid 5px"
button.style.borderRadius = "20px"
button.style.boxShadow = "10px 6px darkolivegreen"
button.style.backgroundColor = "lightgreen"
button.style.fontSize = "125%"
button.textContent = "create table"

body.appendChild(button)
//////////////////////////////////////////////////////////////
///                                                      /////
/////////////////////////////////////////////////////////////
let buttonClr = document.createElement('div')
buttonClr.addEventListener('click', () => {

    clearTable()
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    circle.style.position = "fixed"
    circle.style.left = "630px"
    circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.fontSize = "40px"
    circle.style.textAlign = "center"

    buttonClr.style.backgroundColor = "lightblue"
    circle.style.backgroundColor="yellow"
    buttonClr.appendChild(circle)
    setTimeout(() => {
        buttonClr.textContent = ' '
        buttonClr.style.backgroundColor = "red"
        buttonClr.removeChild(circle)
        buttonClr.textContent = "table cleared"
    }, 300)
})
buttonClr.style.textAlign = 'center'
buttonClr.style.position = "fixed"
buttonClr.style.left = "580px"
buttonClr.style.top = "10px"
buttonClr.style.width = "120px"
buttonClr.style.height = "60px"
buttonClr.style.fontSize = "40px"
buttonClr.style.textAlign = "center"
buttonClr.style.border = "black solid 5px"
buttonClr.style.borderRadius = "20px"
buttonClr.style.boxShadow = "10px 6px darkolivegreen"
buttonClr.style.backgroundColor = "red"
buttonClr.style.fontSize = "125%"
buttonClr.textContent = "clear table"

body.appendChild(buttonClr)
/////////////////////////////////////////////////////////////////////////////////
////                                                                     ///////
///////////////////////////////////////////////////////////////////////////////
let buttonStart = document.createElement('div')
buttonStart.addEventListener('click', () => {
    circle.style.borderRadius = "50%"
    circle.style.border = "solid black 3px"
    circle.style.textAlign = 'center'
    circle.style.position = "fixed"
    circle.style.left = "980px"
    circle.style.top = "25px"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.fontSize = "40px"
    circle.style.textAlign = "center"

    buttonStart.style.backgroundColor = "lightblue"
    circle.style.backgroundColor = "yellow"
    buttonStart.appendChild(circle)
    setTimeout(() => {
        buttonStart.textContent = ' '
        buttonStart.style.backgroundColor = "red"
        buttonStart.removeChild(circle)
        
    }, 300)
})
buttonStart.style.textAlign = 'center'
buttonStart.style.position = "fixed"
buttonStart.style.left = "930px"
buttonStart.style.top = "10px"
buttonStart.style.width = "120px"
buttonStart.style.height = "60px"
buttonStart.style.fontSize = "40px"
buttonStart.style.textAlign = "center"
buttonStart.style.border = "black solid 5px"
buttonStart.style.borderRadius = "20px"
buttonStart.style.boxShadow = "10px 6px darkolivegreen"
buttonStart.style.backgroundColor = "red"
buttonStart.style.fontSize = "125%"
buttonStart.textContent = "StartGame"
body.appendChild(buttonStart)
export {
    hor, ver
}