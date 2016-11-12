#!/usr/bin/node

const iterations = 3

function something(i, side) {

	// Create indent
	var indent = ""
	for (var d = 0; d < iterations - i; ++d)
		indent += " "
		
	console.log(indent, i, side)

	// Recurse - make sure to declare iterator as var
	if (i > 0)
		for (var j = 0; j < 2; ++j)
			something(i - 1, j)
}

something(iterations, "start")
