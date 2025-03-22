function checkPalindrome() {
    let num = document.getElementById("inputNumber").value;
    let reversed = num.split('').reverse().join('');
    let message = (num === reversed) ? "It's a palindrome!" : "Not a palindrome.";
    document.getElementById("palindromeResult").innerText = message;
}