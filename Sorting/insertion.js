function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;

        // Shift elements of the sorted portion to the right to make space for currentVal
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place currentVal in the correct position
        arr[j + 1] = currentVal;
    }

    return arr;
}

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

module.exports = insertionSort;