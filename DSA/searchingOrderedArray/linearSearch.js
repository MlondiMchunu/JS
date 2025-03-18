const linearSearch = (array, searchValue) => {
    const array1 = array.sort((a, b) => a - b)
    console.log(array1)
    for (const [index, element] of array1.entries()) {
        if (element === searchValue) {
            return `element found at : ${index}`;
        } else if (element > searchValue) {
            break;
        }
    }
    return null
}

console.log(linearSearch([3, 202, 75, 17, 80], 80))