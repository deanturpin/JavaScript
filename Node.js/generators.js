const fetch = require("node-fetch");

fetch("http://jsonplaceholder.typicode.com/posts/1")
	.then(x => console.log(x));
