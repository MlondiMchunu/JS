function binarySearch(array, searchValue) {

    let lowerBound = 0;
    let upperBound = array.length - 1;

    while (lowerBound <= upperBound) {
        const midpoint = Math.floor((lowerBound + upperBound) / 2);
        const vaueAtMidpoint = array[midpoint];

        if (searchValue === vaueAtMidpoint) {
            return midpoint;
        } else if (searchValue < midpoint) {
            upperBound = midpoint - 1;
        } else if (searchValue > midpoint) {
            lowerBound = midpoint + 1;
        }
    } return null;
}

console.log(binarySearch([6, 23, 43, 65, 98, 234, 654, 876, 923, 940, 1000, 1943], 923))