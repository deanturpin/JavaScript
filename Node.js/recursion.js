#!/usr/bin/node

const iterations = 3

function something(i, side) {

	// Create indent
	var indent = ""
	for (var d = 0; d < iterations - i; ++d)
		indent += " "
		
	console.log(indent, i, side)

	if (i > 0) {
		something(i - 1, "left")
		something(i - 1, "right")
	}
}

something(iterations, "start")
