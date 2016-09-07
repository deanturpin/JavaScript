// https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs/

fs = require('fs')

fs.readFile('/etc/hosts', 'utf8', function (err,data) {

	if (err)
		return console.log(err)

	console.log(data)
});
