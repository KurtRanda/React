// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const seen = new Set();
    let count = 0;

    for (let num of arr) {
        const complement = target - num;

        // Check if the complement exists in the set
        if (seen.has(complement)) {
            count++; // Found a pair
        }

        // Add the current number to the set
        seen.add(num);
    }

    return count;
}

// Examples:
console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([0, -4], -4)); // 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2

