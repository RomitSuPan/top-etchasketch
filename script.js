var container = document.getElementById("container");
var input_grid_size = document.getElementById("input-grid-size");
var submit_grid_size = document.getElementById("submit-grid-size");
const DEFAULT_GRID_SIZE = 5;
submit_grid_size.addEventListener("click", changeGridSize);
buildGrid(DEFAULT_GRID_SIZE);

function buildGrid(grid_size) {
    for (let index_row = 0; index_row < grid_size; index_row++) {
        for (let index_col = 0; index_col < grid_size; index_col++) {
            var cell = document.createElement("div");
            cell.style.border = "1px solid #b8b5b4";
            cell.style.margin = "0px";
            cell.style.padding = "0px";
            cell.style.boxSizing = "border-box";
            cell.style.flex = "0 0 calc(100% / "+grid_size+")";
            console.log(cell.style.flex);
            cell.className = "cell";
            cell.addEventListener("mouseover", sketch)
            container.appendChild(cell);
        }
    }
}

function changeGridSize() {
    container.replaceChildren();
    var grid_size = input_grid_size.value;
    buildGrid(grid_size);
}

function sketch(event) {
    event.target.style.backgroundColor = "Black"
}