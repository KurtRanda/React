// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // Convert numbers to strings
    const str1 = num1.toString();
    const str2 = num2.toString();

    // If lengths are not equal, the frequencies can't be the same
    if (str1.length !== str2.length) return false;

    const frequencyCounter = {};

    // Count the frequency of digits in num1
    for (let digit of str1) {
        frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
    }

    // Check the frequencies in num2
    for (let digit of str2) {
        if (!frequencyCounter[digit]) {
            return false; // Digit not found or frequency mismatch
        }
        frequencyCounter[digit] -= 1; // Decrement the frequency
    }

    return true;
}

// Examples:
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false


