// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody")

function buildTable(data) {
  // clear previous table
  tbody.html("");

  data.forEach((dataRow) => {
    
    // starts a new row for each item in array
    let row = tbody.append("tr");
    
    // adds "table data" class for each value in that member of the array
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}