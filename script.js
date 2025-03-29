function createTable() {
    //Write your code here
	
            // Clear any existing table
            const table = document.getElementById('myTable');
            table.innerHTML = '';
            
            // Get number of rows
            const rows = parseInt(prompt("Input number of rows"));
            if (isNaN(rows) || rows <= 0) {
                alert("alert");
                return;
            }
            
            // Get number of columns
            const cols = parseInt(prompt("Input number of columns"));
            if (isNaN(cols) || cols <= 0) {
                alert("alert");
                return;
            }
            
            // Create table rows and cells
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.textContent = `Row-${i} Column-${j}`;
                }
            }
    
}