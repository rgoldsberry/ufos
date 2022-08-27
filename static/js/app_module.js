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

function handleClick() {
  // get the date out of the box
  let date = d3.select("#datetime").property("value");

  // start with the raw data, then apply filters to it
  let filteredData = tableData;

  // if a date has been filtered, filter to that date. 
  // otherwise, return full table
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date)
  };

  // rebuild the table with filtered data
  buildTable(filteredData);

}

// listen for a click, then run handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// load the full table initially
buildTable(tableData);