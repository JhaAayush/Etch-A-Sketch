window.onload = () => {
    makeRows(1, 1);
}

const container = document.getElementById("box");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    cell_h = 640 / rows;
    cell_w = 640 / cols;
    $(".grid-item").height(cell_h)
    $(".grid-item").width(cell_w)
};

function createGrid(e) {
    $(".grid-item").remove();
    var row_count = 1, column_count = 1;
    row_count = e.value;
    column_count = e.value;
    makeRows(row_count, column_count);
    $('#slider-val').text(slider.value + " x " + slider.value);
}
function changeColorToBlack() {
    gridItems = document.querySelectorAll('.grid-item')
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = "black";
        });
    }
}
function changeColorToRainbow() {
    
    gridItems = document.querySelectorAll('.grid-item')
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', function () {
            var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            this.style.backgroundColor = color;
        });
    }
}
var slider = document.getElementsByClassName('slider')[0];
//var dimension = document.getElementsByClassName('dimension')[0];
slider.addEventListener('input', function () {
    $(".grid-item").remove();
    var row_count = 1, column_count = 1;
    row_count = this.value;
    column_count = this.value;
    makeRows(row_count, column_count);
    $('#slider-val').text(slider.value + " x " + slider.value);
})

gridItems = document.querySelectorAll('.grid-item');

$("#black").click(changeColorToBlack);
$("#clear").click(function () {
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].style.backgroundColor = "white";
        }
    });
$("#rainbow").click(changeColorToRainbow);
   


