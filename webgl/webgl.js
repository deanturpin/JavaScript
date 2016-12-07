"use strict"

function createShader(gl, type, source) {

	var shader = gl.createShader(type)
	gl.shaderSource(shader, source)
	gl.compileShader(shader)
	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
	if (success) {
		return shader
	}

	console.log(gl.getShaderInfoLog(shader))
	gl.deleteShader(shader)
}

function createProgram(gl, vertexShader, fragmentShader) {

	var program = gl.createProgram()

	gl.attachShader(program, vertexShader)
	gl.attachShader(program, fragmentShader)
	gl.linkProgram(program)
	var success = gl.getProgramParameter(program, gl.LINK_STATUS)
	if (success) {
		return program
	}

	console.log(gl.getProgramInfoLog(program))
	gl.deleteProgram(program)
}

onload = function() {

	var canvas = document.getElementById("canvas")

	// https://en.wikipedia.org/wiki/WebGL

	/*
	WebGL runs on the GPU on your computer. As such you need to provide the code
	that runs on that GPU. You provide that code in the form of pairs of
	functions. Those 2 functions are called a vertex shader and a fragment
	shader and they are each written in a very strictly typed C/C++ like
	language called GLSL. (GL Shader Language). Paired together they are called
	a program.
	*/

	// Create WebGL rendering context
	var gl = canvas.getContext("webgl")

	// INITIALISE
	console.log("INITIALISE")

	// Vertex shader
	console.log("vertex shader")
	var vertexShaderSource = document.getElementById("2d-vertex-shader").text
	var fragmentShaderSource = document.getElementById("2d-fragment-shader").text

	// Fragment shader
	console.log("fragment shader")
	var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
	var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

	var program = createProgram(gl, vertexShader, fragmentShader)
	var positionAttributeLocation = gl.getAttribLocation(program, "a_position")
	var positionBuffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

	var positions = [
		0, 0,
		0, 0.5,
		0.7, 0,
	]

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

	// RENDER
	console.log("RENDER")

	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
	gl.clearColor(0.0, 1.0, 1.0, 1.0)
	gl.enable(gl.DEPTH_TEST)

	gl.useProgram(program)

	gl.enableVertexAttribArray(positionAttributeLocation);

	// Bind the position buffer.
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	 
	// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
	var size = 2;          // 2 components per iteration
	var type = gl.FLOAT;   // the data is 32bit floats
	var normalize = false; // don't normalize the data
	var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
	var offset = 0;        // start at the beginning of the buffer

	gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

	var primitiveType = gl.TRIANGLES;
	var offset = 0;
	var count = 3;
	gl.drawArrays(primitiveType, offset, count);
}
