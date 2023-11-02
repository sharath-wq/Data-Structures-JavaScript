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
