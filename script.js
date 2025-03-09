const gridContainer = document.querySelector(".grid-container");
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        for (let o = 1; o <= size; o++) {
            const row = document.createElement("div");
            row.classList.add("grid-row");
            row.addEventListener('mouseover',
                e => e.target.classList.add('mouse-hover')
            );
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}
createGrid(50);

