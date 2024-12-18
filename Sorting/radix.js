// radix.js
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let num of nums) {
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// Export all functions
module.exports = { getDigit, digitCount, mostDigits, radixSort };
