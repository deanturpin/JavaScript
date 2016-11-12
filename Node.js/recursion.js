#!/usr/bin/node

const iterations = 3

function something(i, side) {

	console.log(" ".repeat(iterations - i), i, side)

	// Recurse - make sure to declare iterator as var
	if (i > 0)
		for (var j = 0; j < 2; ++j)
			something(i - 1, j)
}

something(iterations, "start")
