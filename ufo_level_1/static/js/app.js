// from data.js
let tableData = data;

// Use D3 to select the table body
let tbody = d3.select('tbody');
console.log(data);

data.forEach((ufoSighting) => {
    console.log(ufoSighting);
    let row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        console.log(key,value);
        let cell = row.append('td');
        cell.text(value);
    });
});

// YOUR CODE HERE!
let button = d3.select("filter-btn");
let form = de.select("datetime");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

}