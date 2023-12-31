## What is an algorithm?

An algorithm is a set of well-defined instructions to solve a particular problem.

### Characteristics

-   Well-defined inputs and outputs
-   Each step should be clear and unambiguous
-   Language-independent

### Why algorithms?

As a developer, you're going to come across problems that you need to solve. Learning algorithms translates to learning different techniques to efficiently solve those problems.

One problem can be solved in many ways using different algorithms. Every algorithm comes with its own tradeoffs when it comes to performance.

### Algorithm analysis

There are multiple ways to solve one problem. Ex: There are multiple algorithms to sort a list of numbers. How do we analyze which one of them is the most efficient algorithm?

Generally, when we talk about performance, we use an absolute measure. If I can run 100 meters in 12 seconds, I'm faster than someone who takes 15 seconds.

### Algorithm analysis contd.

The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors:

-   Programming language used to implement the algorithm
-   The computer the program runs on
-   Other programs running at the same time
-   Quality of the operating system

### Algorithm analysis contd.

We evaluate the performance of an algorithm in terms of its input size.

-   Time complexity - Amount of time taken by an algorithm to run, as a function of input size
-   Space complexity - Amount of memory taken by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine-independent but the comparison is also more appropriate.

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.

If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

### How to represent complexity?

#### Asymptotic notations

Mathematical tools to represent time and space complexity.

-   Big-O Notation (O-notation) - Worst-case complexity
-   Omega Notation - Best-case complexity
-   Theta Notation - Average case complexity

### Big-O Notation

The worst-case complexity of an algorithm is represented using the Big-O notation. Big-O notation describes the complexity of an algorithm using algebraic terms.

It has two important characteristics:

-   It is expressed in terms of the input.
-   It focuses on the bigger picture without getting caught up in the minute details.

### Big-O Time complexity contd.

```JavaScript
// Linear time complexity
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Constant time complexity
function summation(n) {
  return (n * (n + 1)) / 2;
}

// Quadratic time complexity
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // some code
  }
}

// Cubic time complexity
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    for (let k = 1; j <= j; k++) {
      // some code
    }
  }
}

// Logarithmic time complexity
let n = 1024;
while (n > 1) {
  n /= 2;
}


```

### Space complexity

-   O(1) - Constant
-   O(n) - Linear
-   O(longn) - Logarithmic

### Few points to note

-   Multiple algorithms with the same programming language can be implemented in different ways.
-   The same algorithm with the same programming language can be implemented in different ways.
-   When writing programs at work, don't lose sight of the big picture. Rather than writing clever code, focus on writing code that is simple to read and maintain.

# Objects - Big-O

-   An object is a collection of key vlalue pairs

```JavaScript
	const person = {
		firstName: "Bruce",
		lastName: "Wayne"
	}
```

-   Insert - O(1)
-   Remove - O(1)
-   Access - O(1)
-   Search - O(n)
-   Object.keys() - O(n)
-   Object.values() - O(n)
-   Object.entries() - O(n)

# Array - Big-O

-   An array is an ordered collection of values

```JavaScript
	const odd = [1, 2, 5, 7, 9]
```

-   Insert / remove at end - O(1)
-   Insert / remove at beginnning - O(n)
-   Access - O(1)
-   Search - O(n)
-   Push / Pop - O(1)
-   Shift / Unshift / Concat / Slice / Splice - O(n)
-   forEach / map / filter/ reduce - O(n)

# Math Algorithms

-   Fibonacci sequence
-   Factorial of a number
-   Prime number
-   Power of two
-   Recursion
-   Fibonacci sequence with recursion
-   Factorial of a number wiht recursion

1. Fibonacci Sequence

**Problem** - Give a number 'n', find the first 'n' elements of the fibonacci sequence

-   In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding onces
-   The first two numbers in thet sequence are 0 and 1.

-   fibonacci(2) = [0, 1]
-   fibonacci(3) = [0, 1, 1]
-   fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

```JavaScript
	function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

Big-O = O(n)

```

2. Factorial of a number

**Problem** - Given an integer 'n', find the factorial of that integer

-   In mathamatics, the factorial of a non-negetive integer 'n', denetoed n!, is the product of all positive integers less than or equal to 'n'.

-   Factorial of 0 is 1.

-   Factorial(4) = 4 \* 3 \* 2 \* 1 = 24
-   Factorial(5) = 5 \* 4 \* 3 \* 2 \* 1 = 120

```JavaScript
	function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Big-O = O(n)

```

3. Prime number

**Problem** - Given a natural number 'n', determine if the number is prime or not

-   A prime number is a natural number greater than 1 that is not a product of two smaller number.

-   isPrime(5) = true (1 \* 5 or 5 \* 1)

-   isPrime(4) = false (1 \* 4 or 2 \* 2 or 4 \* 1)

```JavaScript
	function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Big-O = O(n)

```

# Optimized Primality Test

-   Integers larger than the square root do not need to be checked becuase, whenever 'n = a \* b' one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'

-   n = 24, a = 4 and b = 6

-   The square root of 24 is 4.89

-   4 is less than 4.89

-   a is less than the square root of n

-   n = 35, a = 5 and b = 7

-   The square root of 35 is 5.91

-   5 is less than 5.91

-   a is less than the square root of n

```JavaScript
	function isPrime(n) {
    if (n < 2) {
        return false;
    }

    console.log(Math.sqrt(n));

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Big-O = O(sqrt(n))

```

4. Power of Two

**Problem** - Give a positive integer 'n', determine if the number is power of 2 or not

-   An integer is power of two if there exist an integer 'x' such that 'n' === 2^x

-   isPowerOfTwo(1) = true (2^0)

-   isPowerOfTwo(2) = true (2 ^ 1)

-   isPowerOfTwo(5) = false

```JavaScript
	function powerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }

        n = n / 2;
    }

    return true;
}

console.log(powerOfTwo(1)); // true
console.log(powerOfTwo(2)); // true
console.log(powerOfTwo(5)); // false

// Big-O = O(logn)


```

# Optimized Bitwise

```JavaScript
	function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}


console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false

// Big-O = O(1)
```

# Recursion

## What?

-   Recursion is a problem solving technique where the solution depends on solution to smaller instance of the same problem

-   Recursion is when a function calls itself

## Why?

-   A great technique to simplify your solution

-   If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful

# A few points about recursion

-   Every recursive solution needs to have a base case - a condition to terminate the recursion

-   Recursion might simplify solving a problem but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution.

-   Recursion is a topic that is not the most stright forward to understand. Do not give up if you struggle with the concept
