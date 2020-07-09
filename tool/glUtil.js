/**
 * 获取webgl的上下文
 */
let getGL = function (canvas) {
    return canvas.getContext('webgl')
}
/**
 * 
 * @param {context对象} gl 
 * @param {r} r 
 * @param {g} g 
 * @param {b} b 
 * @param {a} a 
 */
let clearScreen = function (gl, r, g, b, a) {
    gl.clearColor(r, g, b, a)
    gl.clear(gl.COLOR_BUFFER_BIT)
}
/**
 * 创建并编译shader
 * @param {上下文对象} gl  
 * @param {shader类型 gl.FRAGMENT_SHADER  gl.VERTEX_SHADER} type 
 * @param {shader代码} code 
 */
let createShaderByType = function (gl, type, code) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    return shader;
}
/**
 * 创建并连接着色器
 * @param {上下文对象} gl 
 * @param {顶点shader} vertShader 
 * @param {片元shader} fragShader 
 */
let initProgram = function (gl, vertShader, fragShader) {
    let shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
    return shaderProgram;
}

