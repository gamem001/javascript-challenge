// from data.js refer to data array of objects
let tableData = data;

// Use D3 to select the table body
let tbody = d3.select('tbody');
// console.log(data);

//loop through data and console.log objects. 
//append a row for each array of objects.
//use object.entries and forEach to console.log each data value.
//use d3 to append one cell per data value.
//use d3 to append each cells text with data values.
tableData.forEach((ufoSighting) => {
    console.log(ufoSighting);
    let row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        console.log(key,value);
        let cell = row.append('td');
        cell.text(value);
    });
});

//select the button
let button = d3.select("#filter-btn");

//select the form
let form = d3.select(".form-group");

//create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    //prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");
    //select input element
    let inputElement = d3.select("#datetime");
    //get the property value of input element
    let inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    let filteredData = tableData.filter (dateData => dateData.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((search) => {
        console.log(search);
        let row = tbody.append("tr");
        Object.entries(search).forEach(([key, value]) => {
            console.log(key,value);
            let cell = row.append('td');
            cell.text(value);
        });
    });
  
};
