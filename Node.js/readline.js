// Usage
// ip r | node readline.js

var readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

// Read one line at a time
rl.on('line', (line) => {

	console.log(line)
})
