/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start]; // Choose the first element as the pivot
    let pivotIndex = start; // Track where the pivot should end up

    // Iterate through the array, placing smaller elements to the left of the pivot
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            pivotIndex++; // Move the pivotIndex to the right
            // Swap the smaller value with the element at pivotIndex
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    // Swap the pivot value with the value at pivotIndex
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

    return pivotIndex;
}

// Examples:
let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

/*
quickSort accepts an array, left index, and right index
*/


function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        // Get the pivot index
        let pivotIndex = pivot(arr, start, end);

        // Recursively sort the left and right sides
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}


let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,
    2, 453, 546, 75, 67, 4342, 32
];

module.exports = quickSort, pivot;