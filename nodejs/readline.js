console.log("readline");

/*
var readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
*/

process.stdin.setEncoding('utf8')
process.stdin.resume()

process.stdin.on('data', function (command) {
	console.log('got command: \"%s\"', command.trim())

	// process.stdout.emit('got command: \"%s\"', command)
})
