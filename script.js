
    //Write your code here
     document.getElementById('Btn').addEventListener('click', function() {
            // Clear any existing table
            const table = document.getElementById('myTable');
            table.innerHTML = '';
            
            // Get number of rows
            const rows = parseInt(prompt("Input number of rows"));
            if (isNaN(rows) || rows <= 0) {
                alert("Please enter a valid positive number for rows");
                return;
            }
            
            // Get number of columns
            const cols = parseInt(prompt("Input number of columns"));
            if (isNaN(cols) || cols <= 0) {
                alert("Please enter a valid positive number for columns");
                return;
            }
            
            // Create table header row if needed
            const headerRow = table.insertRow();
            for (let j = 0; j < cols; j++) {
                const th = document.createElement('th');
                th.textContent = `Column ${j}`;
                headerRow.appendChild(th);
            }
            
            // Create table rows and cells
            for (let i = 0; i < rows; i++) {
                const row = table.insertRow();
                
                for (let j = 0; j < cols; j++) {
                    const cell = row.insertCell();
                    cell.textContent = `Row ${i} = Column ${j}`;
                }
            }
        });