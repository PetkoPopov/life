
function makeTable(rows,cols){


let table = document.createElement('table')
table.setAttribute('id','table-set')
for(let row = 0 ;row < rows ;row++ ){
    let tr = document.createElement('tr')
    for(let col =0 ;col<cols;col++){
        let td = document.createElement("td")
        // console.log('in TD')
        td.style.width = "12px"
        td.style.height="12px"
        td.style.border = "solid black 1px"
        td.style.value = ''
        td.addEventListener('click',()=>{
            td.style.backgroundColor ='rgb(132, 217, 13)'
            td.style.value= "1"
        })
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
let div = document.getElementById('table')
div.appendChild(table)
}

export{makeTable}