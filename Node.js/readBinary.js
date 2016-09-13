// Usage
// ip r | node readline.js
// while :; do dd bs=40 count=1 2>/dev/null < /dev/urandom; sleep .1; done | node readBinary.js

var readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

let total = 0;

// Read one line at a time
rl.on('line', (line) => {

	total += line.length;
	console.log(line.length)
})

console.log("Total", total);
