// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    if (arr.length === 0) return false;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const average = (arr[left] + arr[right]) / 2;

        if (average === targetAvg) {
            return true;
        } else if (average < targetAvg) {
            left++; // Move the left pointer to increase the average
        } else {
            right--; // Move the right pointer to decrease the average
        }
    }

    return false;
}

// Examples:
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
