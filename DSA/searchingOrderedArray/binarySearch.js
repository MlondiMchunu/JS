function binarySearch(array, searchValue) {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    while (lowerBound <= upperBound) {
        const midpoint = Math.floor((upperBound + lowerBound) / 2);
        const valueAtMidpoint = array[midpoint];

        if (searchValue === valueAtMidpoint) {
            return midpoint;
        } else if (searchValue < valueAtMidpoint) {
            upperBound = midpoint - 1;
        } else if (searchValue > valueAtMidpoint) {
            lowerBound = midpoint + 1;
        }
    }
    return null
}

console.log(binarySearch([6, 23, 43, 65, 98, 234, 654, 876, 923, 940, 1000, 1943], 654))