
var hor = document.getElementById('input-hor')
// hor.style.position="fixed"
hor.style.position = "relative"
// hor.style.left = "75px"
// hor.style.top = "10px"
hor.style.width = "120px"
hor.style.height = "60px"
hor.style.fontSize = "40px"
hor.style.textAlign = "center"
hor.style.border = "black solid 5px"
hor.style.borderRadius = "20px"
hor.style.boxShadow = "10px 6px darkolivegreen"
hor.style.backgroundColor = "yellow"


let count = 20
hor.addEventListener("wheel", () => {
    count = count + 1
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

export {
    hor
}