function reverseString() {
    let str = document.getElementById("inputString").value;
    document.getElementById("reverseResult").innerText = "Reversed: " + str.split('').reverse().join('');
}