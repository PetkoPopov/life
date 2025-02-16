
var ver = document.getElementById('input-ver')
ver.style.position = "fixed"
// ver.style.position = "absolution"
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