const fetch = require("node-fetch");

fetch("http://jsonplaceholder.typicode.com/posts/1")
	.then(response => response.json())
	.then(post => post.title)
	.then(x => console.log("Title", x));
