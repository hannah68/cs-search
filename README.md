# Searching

An important problem in computing is optimising how we search for information.

## Learning Objectives

- Understand different methods of searching arrays
- Implement different methods of searching arrays

## Introduction

The information we're interested in finding has to be stored _somehow_. Finding optimal ways of _somehow_ is where different types of data structures come in - we'll look at different structures later in the course. However, in essence, the idea is to create useful data structures for storing information and to develop efficient algorithms for processing that information - often, one leads to the other and visa-versa.

Here, the process we're interested in is _searching_, and we can consider that by using one of the simpler data structures (one which we've considered often, so far) - arrays.

## Arrays

In computer science, the obvious way to store a collection of items is in an array, whereby elements of the array are typically stored in a continuous sequence of computer memory locations.

As you know, a list is represented in javascript thus:

```js
const xs = [2187, 27, 19683, 9, 243, 3, 729, 81, 6561];
```

The array `xs` has 9 elements. In javascript, we find the size of an array via the array prototype property [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length), so here, `xs.length` is 9. In everyday life, we usually start counting from 1; unfortunately, with arrays in computer science, we more often than not start counting from 0, and that is true for javascript. hence, for our array `xs`, its positions are 0, 1, 2, . . . , 7, 8. The element in the 8th (last) position is 6561, and although we could use the notation `xs[8]` to denote this element, it is usually more useful to use the array's length, e.g. `xs[xs.length - 1]` (since we start counting from 0, not 1). More generally, for any integer _i_ denoting a position, we write `xs[i]` to denote the element in the _ith_ position. This position _i_ is called an index, and we say that the individual items `xs[i]` in the array `xs` are accessed using their index _i_.

### Looping

We can access our array elements by jumping straight to a location via its index, e.g. `xs[0]` (2187), `xs[1]` (27), `xs[2]` (19683) etc., but since algorithms that process data stored in arrays will typically need to visit all the items in the array and apply appropriate operations on those items, it's often more useful to move sequentially through the array by incrementing or decrementing that index automatically.

In pseudocode, this would typically take the general form:

```text
for i = 0, 1, ..., n-1
  do something
```

In javascript (and many other languages), we have this basic form (among others):

```text
for( initialisation ; condition ; update ) {
  //do something
}
```

e.g.

```js
let sum = 0;
for( let i = 0; i < xs.length ; i++ ) {
  sum += xs[i];
}
```

(you can also do more interesting initialisations, e.g.)

```js
for (let [i, sum] = [0, 0]; i < xs.length; i++) {
  sum += xs[i];
  console.log(i, sum);
}
```

It's this basic form of looping through an array that we're going to use to explore searching, next.

## Searching an Array

Consider again our array:

```js
const xs = [2187, 27, 19683, 9, 243, 3, 729, 81, 6561];
```

If we ask where the item _27_ is in the array `xs`, the answer is _1_ because that's the index of that item. If we ask where the item _60_ is in the array, the answer is _nowhere_ (_-1_, _null_, _undefined_, etc.), because the item 60 is not present in `xs`.

You are now asked to write an algorithm that finds whether the number _x_ is in the array `xs`.

### Linear Search  

We can use _pseudocode_ to express a simple algorithm for searching through an array:

```text
for i = 0, 1, ..., n-1
  if xs[i] is equal to x
    return i

If we reach this point then x is not in xs
  return -1
```

What's the time complexity of the algorithm above?

### Binary Search

While the simple linear seach satisfies the requirements of finding _x_ in _xs, might there be better ways of reaching the same result? Indeed, you should always consider whether it is possible to improve upon the performance of a particular algorithm. In this case, a more efficient method is a binary search.

A binary search relies on an _ordered_ list, so first, we need to sort `xs`:

```js
const xs = [3, 9, 27, 81, 243, 729, 2187, 6561, 19683];
```

Below describes the binary search algorithm:

```text
Set left = 0 and right = n-1 (where n is the length of the list, xs)  

While left is less than right
  set mid to be the integer part of (left+right)/2
  if x is greater than xs[mid]
    set left to mid+1,
  otherwise 
    set right to mid

If xs[left] is equal to x
  return left,
otherwise 
  return -1
```

A binary search has time complexity of O(log n). To realise the implication of this, consider an array of 1 million items. The log<sub>2</sub>1000000 is approximately 20. Hence, for an array of size 1000000, only 20 iterations are needed in the worst case of the binary-search algorithm, whereas 1000000 are needed in the worst case of the linear-search algorithm.

## Exercise

1. Fork this repository and clone the fork to your machine
2. Run `npm ci` to install project dependencies
3. Implement each of the empty _search_ functions inside the [src](./src) directory
4. Run `npm run test` to test your code
5. Add timing results for each of your search algorithms into the file [searchResults.md](docs/searchResults.md) (tip: `performance.now()` might be useful here, see: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now). Which ran fastest? And slowest? Given your understanding of Big O complexity of the different search algorithms, were those results what you expected? Add that summary to the file, too
