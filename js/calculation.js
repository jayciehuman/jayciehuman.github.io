function calculate() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var thresholdOfficial = 0
    var threshold4px = 1

    var pickupOfficial = (inputValue * 2) - 10;
    var deliveryOfficial = (inputValue * 2) - 10; 
    
    if (inputValue <= threshold4px) {
        var pickup4px = 10.8;
        var delivery4px = 33.5;
    } else {
        var pickup4px = 10.8 + (inputValue - 1 ) * 6.4;
        var delivery4px = 33.5 + (inputValue - 1 ) * 6.9;
    }                

    var table = document.getElementById('resultTable');
    table.rows[1].cells[1].innerHTML = pickupOfficial.toFixed(1);
    table.rows[1].cells[2].innerHTML = deliveryOfficial.toFixed(1);

    table.rows[2].cells[1].innerHTML = pickup4px.toFixed(1);
    table.rows[2].cells[2].innerHTML = delivery4px.toFixed(1);
    }