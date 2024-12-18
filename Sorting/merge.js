function merge(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

function mergeSort(arr) {
    // Base case: if array length is 1 or 0, it's already sorted
    if (arr.length <= 1) return arr;

    // Split the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    let right = mergeSort(arr.slice(mid));  // Recursively sort the right half

    // Merge the sorted halves
    return merge(left, right);
}


let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

module.exports = { merge, mergeSort};