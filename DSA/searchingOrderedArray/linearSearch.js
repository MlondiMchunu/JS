const linearSearch = (array, searchValue) => {
    for (const [index, element] of array.entries()) {
        if (element === searchValue) {
            return index;
        } else if (element > searchValue) {
            break;
        }
    }
    return null
}

console.log(linearSearch([3, 17, 75, 80, 202], 80))