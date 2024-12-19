// add whatever parameters you deem necessary
function pivotIndex(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0); // Total sum of the array
    let leftSum = 0; // Initialize left sum

    for (let i = 0; i < arr.length; i++) {
        // Right sum is totalSum minus leftSum minus the current element
        const rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i; // Found the pivot index
        }

        leftSum += arr[i]; // Update the left sum
    }

    return -1; // No valid pivot index found
}

// Examples:
console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // 3
console.log(pivotIndex([5, 2, 7])); // -1
console.log(pivotIndex([-1, 3, -3, 2])); // 1
