var hor=document.getElementById('input-hor')

hor.style.width="120px"
hor.style.height="60px"
hor.style.fontSize="40px"
hor.style.textAlign="center"
hor.style.border="black solid 5px"
hor.style.borderRadius= "20px"
hor.style.boxShadow="10px 6px darkolivegreen"
hor.style.backgroundColor="yellow"


let count = 100 
hor.addEventListener("wheel",()=>{
    count=count+20
    hor.textContent=count
})
hor.addEventListener('click',()=>{
    count=0 
    hor.textContent=count
    hor.style.backgroundColor = "lightgreen"
    
    setTimeout(() => {
        hor.style.backgroundColor = "yellow"
    }, 300)
})

var ver = document.getElementById('input-ver')
ver.style.position="fixed"
ver.style.left="250px"
ver.style.top="10px"
ver.style.width = "120px"
ver.style.height = "60px"
ver.style.fontSize = "40px"
ver.style.textAlign = "center"
ver.style.border = "black solid 5px"
ver.style.borderRadius = "20px"
ver.style.boxShadow = "10px 6px darkolivegreen"
ver.style.backgroundColor = "yellow"

let countVer = 100
ver.addEventListener("wheel", () => {
    countVer = countVer + 20
    ver.textContent = countVer
})
ver.addEventListener('click', () => {
    ver.style.backgroundColor = "lightgreen"
    countVer = 0
    ver.textContent = countVer
    setTimeout(()=>{
ver.style.backgroundColor="yellow"
    },300)
})
let body = document.getElementsByTagName("body")[0]

let button = document.createElement('div')
let circle = document.createElement('div')
circle.style.borderRadius="50%"
circle.style.border="solid black 3px"
circle.style.textAlign = 'center'
circle.style.position = "fixed"
circle.style.left = "470px"
circle.style.top = "25px"
circle.style.width = "30px"
circle.style.height = "30px"
circle.style.fontSize = "40px"
circle.style.textAlign = "center"

circle.style.backgroundColor = "red"


button.setAttribute('class','_buttonTest')

button.addEventListener('click',()=>{
    button.style.backgroundColor = "lightgreen"
       
 button.appendChild(circle)
    setTimeout(() => {
        
        button.textContent=' '
        button.style.backgroundColor = "yellow"
        button.removeChild(circle)
    }, 300)
})
button.style.textAlign='center'
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
button.style.backgroundColor = "yellow"

body.appendChild(button)
export{
    hor,ver
}