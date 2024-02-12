var serialCounter = 1;
var maxTransactions = 10;
var storedData = [];

function update() {
    var name = document.getElementById("sender").value;
    var age = document.getElementById("reciever").value;
    var amount = document.getElementById("amount").value;

    var newData = {
        num: serialCounter,
        name: name,
        age: age,
        amount: amount
    };

    storedData.push(newData);

    if (storedData.length > maxTransactions) {
        storedData.shift();
    }

    localStorage.setItem("userData", JSON.stringify(storedData));
    serialCounter++;

}


function displayData() 
{
    var savedData = localStorage.getItem("userData");

    storedData = JSON.parse(savedData) || [];
    
    var dataTable = document.getElementById("dataBody");

    dataTable.innerHTML = "";

    storedData.forEach(function(data) {
        var newRow = dataTable.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        cell1.innerHTML = data.num;
        cell2.innerHTML = data.name;
        cell3.innerHTML = data.age;
        cell4.innerHTML = data.amount;
    });
}
