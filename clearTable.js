function clearTable(){
    let div = document.getElementById('table')
    let table = document.getElementsByTagName('table')[0]
    div.removeChild(table)
}
export{clearTable}