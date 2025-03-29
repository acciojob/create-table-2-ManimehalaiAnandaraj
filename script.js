function createTable() {
    //Write your code here
   const numRows = parseInt(prompt("Input number of rows"));
    const numCols = parseInt(prompt("Input number of columns"));

    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

   const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear previous table if any

    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const createTableButton = document.createElement("button");
    createTableButton.textContent = "Create the table";
    createTableButton.onclick = createTable;
    document.body.appendChild(createTableButton);

    const table = document.createElement("table");
    table.id = "myTable";
    document.body.appendChild(table);
});


}
