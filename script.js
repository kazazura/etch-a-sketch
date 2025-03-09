const gridContainer = document.querySelector(".grid-container");
const btnSquare = document.querySelector(".squares");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        for (let o = 1; o <= size; o++) {
            const row = document.createElement("div");
            row.classList.add("grid-row");

            function generateRandomColor() {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                row.addEventListener('mouseover', () => {
                    row.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
                });
            }
            generateRandomColor();
            column.appendChild(row);
        }
        gridContainer.appendChild(column);

    }
}

createGrid(16);

function resetGrid() {
    const input = prompt("Enter the a number: ");
    if (input > 100) {
        alert("The number of squares must be equal to or less than 100.");
        createGrid(16);
    } else {
        createGrid(input);
    }
}

btnSquare.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    resetGrid();
});


