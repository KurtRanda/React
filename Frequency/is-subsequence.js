// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2

    // Traverse str2 while trying to match str1
    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++; // Move pointer i if there's a match
        }
        if (i === str1.length) {
            return true; // All characters in str1 are found in order
        }
        j++; // Always move pointer j
    }

    return false; // If not all characters in str1 are found
}

// Examples:
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false

