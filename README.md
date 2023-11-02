#  What is an algorithm

**An algoritham is a set of well-defined instructions to solve a perticular problem**

## Characteristics

1. Well defiend inputs and outputs
2. Each step should be clear and unambiguous
3. Language independent

## Why algorithms

**As a developer, you're goging to come across problems that you need to solve**
*Learning algorithms translage to learning different techniques to efficiently solve those problems*

*One problem can be sovled in many ways using different algorithms*

*Every algorithm comes with its own tradeoffs when it comes to performance*

# Algorithm analysis

**There are multiple ways to sovle one problem**
*Ex: There are multiple algorithsm to sort a list of numbers*
*How do we analyse which one of them is the most efficient algoritham?*
*Generally, when we talk about performance, we use an absolute measure*
*If I can run 100 meters in 12 seconds, I'm faster than someone who takes 15 seconds*

# Algorithm analysis contd.

**The absolute running time of an algrithm cannot be predicted, since it depends on a number of factors**

- Programming language used to implement the algroithm
- The computer the program runs on 
- Other programs running at the same time
- Quality of the operating system


# Algorithm analysis contd

**We evalute the performance of an algorithm in terms of its input size**

**Time compelxity** - Amount of time taken by an algoritm to run, as a function of input size
**Space complexity** - Amount of memory taken by an algrithm to run, as a function of input size

*By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate*

*There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constrains*

*If your app needs to be very quick and has plenty of memeory to work with, you don't have to worry abut space complexity*

*If you have very little memory to work with, you should pick a solution that is relatively sower but needs less space*


# How to represent complexity?

**Asymptotic notations**

- Mathematical tools to represent time and space complexity

1. Big-O Notation (O-notation) - Wrost case complexity
2. Omega Notation - Best case complexity
3. Theta Notation - Average casae complexity

# Big-O Notation

**The worst case complexity of an algroithm is represented using the Big-O notation**

*Bit-O notation describes the complexity of an algroithm using algebraic terms*

*It has two important characteristics*

- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in the minute details

# Big-O Time complexity contd.

1. `function summation(n) {
	let sum = 0;
	for (let i = 1 i <= n; i++) {
		sum += i;
	}
	return sum;
}`

- It focuses on the bigger picture without getting caught up in the minute detials

n + 2 => n 

Time complexity => O(n) - Linear

2. `function summation(n) {
	return (n * (n + 1)) / 2;
}`

Time complexity => O(1) - constant

3. `for (i = 1; i <= n; i++) {
	for (j = 1; j <= i; j++) {
		// some code
	}
}`

Time complexity => O(n^2) - Quardratic

4. `for (i = 1; i <= n; i++) {
	for (j = 1; j <= i; j++) {
		for (k = 1; j <= j; k++) {
			// some code
		}
	}
}`

Time compelxity => O(n^3) - Curbic

Input size reduces  by half every iteration 

Time Compelxity => O(logn) - Logarithamic


# Space complecity

1. O(1) - Constant
2. O(n) - Linear
3. O(logn) - Logarithmic


# Few points to note

*Multiple algrithm with the same programming language can be imlementd in different wasy.*

*The same algorithm with the same programming language can be implementd in diffrent ways.*

*When writign programs at work, don't lose sight of thet big picture. Rather than writing clever code that simple to read and maintain.*


# Objects - Big-O

**An object is a collection of key value pairs**

`const person = {
	firstName: 'Bruce',
	lastName: 'Wayne'
}`

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)
 
 
# Array - Big - O

**An array is an ordered collection of values**

`const odd = [1, 2, 5, 7, 9]`

- Insert / remove at end - O(1)
- Insert / remove at beginnning - O(n)
- Access - O(1)
- Search - O(n)
- Push / Pop - O(1)
- Shift / Unshift / Concat / Slice / Splice - O(n)
- forEach / map / filter/ reduce - O(n)











