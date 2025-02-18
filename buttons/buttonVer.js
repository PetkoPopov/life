
var ver = document.getElementById('input-ver')
ver.setAttribute('class', 'btn')

ver.style.backgroundColor = "yellow"

let countVer = 30
ver.addEventListener("wheel", () => {
    countVer = countVer + 1
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
export { ver }