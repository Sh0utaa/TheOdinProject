const container = document.querySelector(".container");
const popup = document.querySelector("#popup");

function drawMatrix(dimention) {
    for (let i = 0; i < dimention; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < dimention; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            
            box.innerHTML = `${i + j}\u00A0`;
            
            box.addEventListener("mouseover", () => {box.setAttribute("style", `
                background: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})
                `)})
            row.appendChild(box);
        } 

        container.appendChild(row);
    }
}

drawMatrix(16);

popup.addEventListener("click", () => {
    let MatrixDimention = prompt("Enter Matrix Dimentions:");
    if(MatrixDimention < 1 || MatrixDimention > 100) alert("Matrix must be between 1 and 100");
    else {
        container.innerHTML = ``;    

        drawMatrix(MatrixDimention);
    }
})