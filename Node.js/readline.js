var readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

// Read one line at a time
rl.on('line', (input) => {

	console.log(input)
})
