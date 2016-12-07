"use strict"

function createShader(gl, type, source) {

	var shader = gl.createShader(type)
	gl.shaderSource(shader, source)
	gl.compileShader(shader)

	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)

	if (success)
		return shader

	console.log(gl.getShaderInfoLog(shader))
	gl.deleteShader(shader)
}

function createProgram(gl, vertexShader, fragmentShader) {

	var program = gl.createProgram()

	gl.attachShader(program, vertexShader)
	gl.attachShader(program, fragmentShader)
	gl.linkProgram(program)

	var success = gl.getProgramParameter(program, gl.LINK_STATUS)

	if (success)
		return program

	console.log(gl.getProgramInfoLog(program))
	gl.deleteProgram(program)
}

onload = function() {

	var canvas = document.getElementById("canvas")

	// Create WebGL rendering context
	var gl = canvas.getContext("webgl")

	// Vertex shader
	var vertexShaderSource = `

	  // an attribute will receive data from a buffer
	  attribute vec4 a_position;
	 
	  // all shaders have a main function
	  void main() {
	 
		// gl_Position is a special variable a vertex shader
		// is responsible for setting
		gl_Position = a_position;
		gl_PointSize = 10.0;
	  }
	`

	var fragmentShaderSource = `

		// fragment shaders don't have a default precision so we need
		// to pick one. mediump is a good default
		precision mediump float;

		void main() {
			// gl_FragColor is a special variable a fragment shader
			// is responsible for setting
			gl_FragColor = vec4(1, 0.5, 0.2, 1);
		}
	`

	// Fragment shader
	var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
	var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

	var program = createProgram(gl, vertexShader, fragmentShader)
	var positionAttributeLocation = gl.getAttribLocation(program, "a_position")
	var positionBuffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

	// Array of points
	var positions = []
	for (var i = 0; i < 1; i += .1) {

		positions[positions.length] = i
		positions[positions.length] = i/2
	}

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

	// gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
	// gl.enable(gl.DEPTH_TEST)

	gl.useProgram(program)

	gl.enableVertexAttribArray(positionAttributeLocation);

	// Bind the position buffer.
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	 
	gl.vertexAttribPointer(
		positionAttributeLocation,
		2,							// Components per iteration
		gl.FLOAT,					// 32-bit floats
		false,						// Don't normalise
		0,							// Stride
		0							// Offset
	)

	/*

	This is the GPU code. You'll notice it isn't quite JavaScript. Most
	tutorials tend to put it between HTML script tags but then it's not
	immediately obvious how it relates to the rest of the code.

	Note: you can't drop the terminating semi-colon.

	var vertCode = 'attribute vec3 coordinates;' +

	   'void main(void) {' +
	         ' gl_Position = vec4(coordinates, 1.0);' +
			       'gl_PointSize = 10.0;'+
				      '}';
	*/
	// gl.clearColor(0.0, 0, 1.0, 1.0)

	// GL primitives

	// POINTS
	// LINES
	// LINE_LOOP
	// LINE_STRIP
	// TRIANGLES
	// TRIANGLE_STRIP
	// TRIANGLE_FAN

	gl.drawArrays(gl.POINTS, 0, positions.length/2);
}
