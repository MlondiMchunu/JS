function twoSum(arr, target) {
    const arr2 = []
    var t = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]

            }return "no pair"
        }


    }                                                                      
}

console.log(twoSum([4, 3, 1, 6, 5, 7], 75))