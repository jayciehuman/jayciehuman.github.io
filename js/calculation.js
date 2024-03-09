function calculate() {

                
    var tableBody = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    var inputValue = parseFloat(document.getElementById('inputValue').value);

    for (var i = 0; i < data.length; i++) {
        var row = tableBody.insertRow(i);

        var nameCell = row.insertCell(0);
        nameCell.innerHTML = data[i].brand;

        var ageCell = row.insertCell(1);
        ageCell.innerHTML = (data[i].next * inputValue).toFixed(1);

        var emailCell = row.insertCell(2);
        emailCell.innerHTML = data[i].remarks;
    }
}