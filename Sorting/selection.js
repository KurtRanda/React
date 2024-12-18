function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // Assume the current index is the minimum

        // Find the smallest element in the remaining array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller value is found
            }
        }

        // Swap if a smaller value was found
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}


let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

module.exports = selectionSort;