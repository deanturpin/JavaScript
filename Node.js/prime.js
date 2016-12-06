#!/usr/bin/node

"use strict"

var iterations = 0

function primes(i, list) {

	++iterations

	// Return the list if we've reached the beginning
	if (i < 0)
		return list

	// If there's no remainder then it's not a prime
	// Just return the list so far
	for (var j = 2; j < i; ++j)
		if (!(i % j))
			return primes(i - 1, list)

	// It's a prime, append it to the list
	return primes(i - 1, i + " " + list)
}

console.log(primes(100, ""))
console.log(iterations + " iterations")
