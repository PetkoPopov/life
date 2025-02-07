var interval;
function startGame(rows, cols) {
    let tds = document.getElementsByTagName("td")
     interval = setInterval(() => {
        //  clearInterval(interval)
        let count = 0
        let arrIndex = []
        let arrNegative=[]
        for (let i = 0; i < rows * cols; i++) {
            // console.log(tds[i].style.value)
            count = 0
            if (tds[i + 1] && tds[i + 1].style.value == '1') { count++ }
            if (tds[i - 1] && tds[i - 1].style.value == '1') { count++ }
            if (tds[i + cols] && tds[i + cols].style.value == '1') { count++ }
            if (tds[i - cols] && tds[i - cols].style.value == '1') { count++ }
            // if (tds[i + 1 + cols] && tds[i + 1 + cols].style.value == '1') { count++ }
            // if (tds[i - 1 + cols] && tds[i - 1 + cols].style.value == '1') { count++ }
            // if (tds[i + 1 - cols] && tds[i + 1 - cols].style.value == '1') { count++ }
            // if (tds[i - 1 - cols] && tds[i - 1 - cols].style.value == '1') { count++ }
            
            if(count == 3||count == 2 ){ arrIndex.push(i)   }
            if(count == 1||count == 4 ){ arrNegative.push(i)}

        }
        arrIndex.forEach(index => {
            tds[index].style.value = '1'
            tds[index].style.backgroundColor = 'aqua'
        })
        arrNegative.forEach(index=>{
            tds[index].style.backgroundColor ='rgb(82, 167, 241)'
            tds[index].style.value = ''
        })

    }, 300)

}
export{
    interval,
    startGame
}