var readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

// Read one line at a time
rl.on('line', (line) => {

	// Extract time
	match = /[^ ]+/.exec(line)

	if (match)
		console.log(match[0])
	else
		console.log("no")
})
