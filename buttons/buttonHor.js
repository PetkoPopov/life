
var hor = document.getElementById('input-hor')
hor.setAttribute('class', 'btn')
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