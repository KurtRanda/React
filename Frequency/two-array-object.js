// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const result = {};

    // Iterate through the keys and map them to the corresponding values
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = i < values.length ? values[i] : null;
    }

    return result;
}

// Examples:
console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}

