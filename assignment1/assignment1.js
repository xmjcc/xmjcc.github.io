/* 
function
->loop
  -> loop

*/

//

// let outMax = 2, innerMax = 2;


"use strict;"
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    createATable();
});

let pct ; // percent value  
let amt ; // amount value

function defineVariables() {
    pct = 25; // percent value  
    amt = 1600; // amount value
}



function calculatePercent() {
    let result = amt * pct / 100;
    document.write("<p>" + pct + "% of " + amt + " is: ");
    document.write(result + "</p>");
}


defineVariables();
calculatePercent();

const createATable = () => {


    const myTable1 = document.getElementById("myTable1");
    console.log(myTable1);
    // if (myTable1) tbl.parentNode.removeChild(myTable1);
    if (myTable1) { myTable1.remove(); }


    const elem = document.getElementById("mylist");
    const table1 = document.createElement("TABLE");
    const mytabletest = elem.appendChild(table1);
    table1.setAttribute('id', 'myTable1');



    // (function () {//self loaded
    rn = document.getElementById("rowNumber").value;
    cn = document.getElementById("colNumber").value;

    for (var r = 0; r < parseInt(rn, 10); r++) {
        var x = document.getElementById('myTable1').insertRow(r);
        for (var c = 0; c < parseInt(cn, 10); c++) {
            var y = x.insertCell(c);
            y.innerHTML = `${r + 1} x ${c + 1} = ${(r + 1) * (c + 1)} `;
        }
    }





};






