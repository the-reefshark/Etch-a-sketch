//Initialise global variables
const container = document.querySelector("#container");
const contWidth = container.offsetWidth;
const contHeight = container.offsetHeight;

//Create divs with specified dimensions of 960px by 960px
function gridGen(pixelRow) {
    const totalSqrs = pixelRow * pixelRow;
    const divWidth = contWidth / pixelRow + "px";
    const divHeight = contWidth / pixelRow + "px";

    container.style.gridTemplateColumns = `repeat(${pixelRow}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${pixelRow}, 1fr)`;

    //Loop creates individual divs
    for(let i = 0; i < totalSqrs; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = divWidth;
        div.style.height = divHeight;
        //Add div to container
        container.appendChild(div);
    }
}

function hovering() {
    const divGrid = document.querySelectorAll(".grid");
    
    divGrid.forEach(div => {
        div.addEventListener("mouseover", e => {
            e.target.classList.add("hover");
        });
    });
}

function resizeGrid() {
    const button = document.querySelector("#resize");
    const divGrid = document.querySelectorAll(".grid");

    //Remove all the divs inside container
    button.addEventListener("click", e => {
        divGrid.forEach(div => {
            container.removeChild(div);
        });
        //Create new grid of given size
        gridGen(prompt("Input new grid size:"));
        hovering();
        resizeGrid();
    });
}

//Initial page load
gridGen(16);
resizeGrid();
hovering();