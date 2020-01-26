// make grid function for drawing the grid


function makeGrid() {
    let rows = document.getElementById('inputHeight').value;
    let cols = document.getElementById('inputWidth').value;
    let grid = document.querySelector('#pixelCanvas');
    let tableData = "";
    for (let i = 0 ; i < rows ; i++) {
        tableData += '<tr>';
        for (let j = 0 ; j < cols ; j++) {
            tableData += '<td></td>';
        }
        tableData += '</tr>';
    }
    grid.innerHTML = tableData;
    tdClick();
}
function tdClick() {
    let tds = document.querySelectorAll('td');
    tds.forEach(function(element,index,array) {
        array[index].addEventListener('click',function() {
            array[index].style.background = document.querySelector('#colorPicker').value;
        });
    })
}
