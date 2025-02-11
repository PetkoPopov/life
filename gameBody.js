import { ver } from "./buttons/buttonVer.js"
import { hor } from "./buttons/buttonHor.js"
import { buttonClr } from "./buttons/buttonClear.js"
import { buttonStart } from "./buttons/buttonStart.js"
import { buttonStop } from "./buttons/buttonStop.js"
import { button } from "./buttons/buttonCreate.js"

let body = document.getElementById("dashbord")

console.log(buttonStart.style.left)
body.appendChild(hor)
body.appendChild(ver)
body.appendChild(button)
body.appendChild(buttonClr)
body.appendChild(buttonStart)
body.appendChild(buttonStop)

export {}