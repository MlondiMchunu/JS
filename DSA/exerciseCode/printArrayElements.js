/*let things = ['apples', 'baboons', 'cribs', 'vulcimers'];

console.log("Index", "\t", "Elements")
for (const [index, elements] of things.entries()) {
    console.log(index, "\t", elements, " ")
}
    */

//time complexity => O(N)

function isPrime(number) {
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false
        }
    } return true
}

console.log(isPrime(15))

//time complexity => O(N)
