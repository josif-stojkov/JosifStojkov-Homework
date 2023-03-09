// Add table
function addTable() {
    // Get table container
   let tableContainer = document.getElementById("table-container");
  
    // Create table element
    let table = document.createElement("table");
  
    // Set table class to Bootstrap table class
    table.classList.add("table");
  
    // Create table header row
    let headerRow = document.createElement("tr");
  
    // Create table header cells and set text content
    let headerCell1 = document.createElement("th");
    headerCell1.textContent = "Club";
    let headerCell2 = document.createElement("th");
    headerCell2.textContent = "Points";
    let headerCell3 = document.createElement("th");
    headerCell3.textContent = "Rank";
  
    // Append header cells to header row
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
  
    // Append header row to table
    table.appendChild(headerRow);
  
    // Create table data rows
    for (let i = 1; i <= 2; i++) {
      // Create row element
      let row = document.createElement("tr");
  
      // Create cells and set text content
      let cell1 = document.createElement("td");
      cell1.textContent = "Club " + i;
      let cell2 = document.createElement("td");
      cell2.textContent = "Points " + i;
      let cell3 = document.createElement("td");
      cell3.textContent = "Rank " + i;
  
      // Append cells to row
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
  
      // Append row to table
      table.appendChild(row);
    }
}
  // Call function to add table
  addTable();
  
  // Style unordered list with siblings selectors
  var listItems = document.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i++) {
    if (i % 2 === 0) {
      listItems[i].style.backgroundColor = "lightgray";
      listItems[i].style.fontWeight = "bold";
    } else {
      listItems[i].style.backgroundColor = "white";
      listItems[i].style.fontWeight = "normal";
    }
  }
  
  // Change style of list items with element selectors
  var listItemElements = document.getElementsByTagName("li");
  for (let i = 0; i < listItemElements.length; i++) {
    listItemElements[i].style.border = "1px solid black";
    listItemElements[i].style.padding
  }