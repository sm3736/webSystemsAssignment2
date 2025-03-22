function calculateTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value) || 0;
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value) || 0;
    let total = subtotal + (tipPercentage / 100) * subtotal;
    document.getElementById("tipResult").innerText = "Total to Pay: ₹" + total.toFixed(2);
}