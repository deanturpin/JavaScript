"use strict";

let i = 10;

(function () {

	let i;
	for (i = 0; i < 10; ++i) {
		console.log("before", i);
	}

})();

let x = {
	y: 5
}

const blah = 6;

console.log("after", i);
