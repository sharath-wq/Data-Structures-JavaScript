function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}

// Big-O = O(1)

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false
