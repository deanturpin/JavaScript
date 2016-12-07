"use strict"

onload = function() {

	var canvas = document.getElementById("canvas");

	/*
	WebGL runs on the GPU on your computer. As such you need to provide the code
	that runs on that GPU. You provide that code in the form of pairs of
	functions. Those 2 functions are called a vertex shader and a fragment
	shader and they are each written in a very strictly typed C/C++ like
	language called GLSL. (GL Shader Language). Paired together they are called
	a program.
	*/

	// Vertex shader
	// Fragment shader

	// Create WebGL rendering context
	var gl = canvas.getContext("webgl");

	// gl.viewportWidth = canvas.width;
	// gl.viewportHeight = canvas.height;

	// gl.clearColor(1.0, 1.0, 1.0, 1.0);
	// gl.enable(gl.DEPTH_TEST);

	console.log("complete")
}
