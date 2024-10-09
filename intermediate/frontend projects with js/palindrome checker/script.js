const input = document.getElementById('text-input');
const submitButton = document.getElementById('check-btn');
const result = document.getElementById('result'); // Correct the ID here
let str = '';
let regex=/\W|_/g;
submitButton.addEventListener('click', () => {
    str = input.value;
    if (!str) {
        alert('Please input a value');
        return; // Early return if no input
    }
    
    const cleanStr = str.replace(regex, '').toLowerCase(); // This removes all non-alphanumeric characters
    let isPalindrome = true; // Reset isPalindrome for each new check

    for (let i = 0; i < cleanStr.length / 2; i++) { // Loop from start to halfway
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) { // Compare characters
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        result.innerText = str + ' is a palindrome';
    } else {
        result.innerText = str + ' is not a palindrome';
    }
});