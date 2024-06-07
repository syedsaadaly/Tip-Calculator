function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var tipPercentage = document.getElementById("tipPercentage").value;
    
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
    
    document.getElementById("totalTip").innerHTML = "Tip Amount: $" + tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerHTML = "Total Amount: $" + totalAmount.toFixed(2);
}
