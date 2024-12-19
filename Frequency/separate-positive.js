// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // If the left element is positive, move the left pointer
        if (arr[left] > 0) {
            left++;
        }
        // If the right element is negative, move the right pointer
        else if (arr[right] < 0) {
            right--;
        }
        // Otherwise, swap the elements
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    return arr;
}

// Examples:
console.log(separatePositive([2, -1, -3, 6, -8, 10])); // [2, 10, 6, -3, -1, -8]
console.log(separatePositive([5, 10, -15, 20, 25])); // [5, 10, 25, 20, -15]
console.log(separatePositive([-5, 5])); // [5, -5]
console.log(separatePositive([1, 2, 3])); // [1, 2, 3]

