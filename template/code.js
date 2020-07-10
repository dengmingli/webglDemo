/**
 * 获取webgl上下文对象
 */
let createGl = function () {
    let canvas = document.getElementById('webgl')
    let gl = getGL(canvas);
    if (!gl) {
        console.error(`webgl 无法创建`)
    }
    return gl
}
/**
 * 创建并编译着色器对象
 */
let createAndComPileShader = function (gl, vertCode, fragCode) {
    let vertShader = createShaderByType(gl, gl.VERTEX_SHADER, vertCode);
    let fragShader = createShaderByType(gl, gl.FRAGMENT_SHADER, fragCode);
    let shaderProgram = initProgram(gl, vertShader, fragShader);
    return shaderProgram;
}
let vertCode =
    `
    precision mediump float;
    attribute vec4 vertPosition;
    attribute float pointSize;
    void main()
    {
        gl_Position = vertPosition;
        gl_PointSize=pointSize;
    }
  `
// precision mediump float; 需要明确精度，否则会报错
let fragCode =

    `
    precision mediump float;
    uniform vec4  fragColor;
    void main()
    {
        gl_FragColor = fragColor;
    }
    
`
let main = function () {
    //获取webgl的上下文对象
    let gl = createGl();
    setBgColor(gl, 1.0, 1.0, 1.0, 1.0,)
    //创建并编译着色器对象
    gl.program = createAndComPileShader(gl, vertCode, fragCode)
    //获取并修改glsl中的数据
    let vertPosition = gl.getAttribLocation(gl.program, 'vertPosition');
    gl.vertexAttrib4f(vertPosition, 1.0, 1.0, 1.0, 1.0);
    let pointSize = gl.getAttribLocation(gl.program, 'pointSize');
    gl.vertexAttrib1f(pointSize, 100.0);
    let fragColor = gl.getUniformLocation(gl.program, 'fragColor');
    gl.uniform4f(fragColor, 1.0, 0.0, 0.0, 1.0);
    //绘制图形
    clearScreen(gl)
    gl.drawArrays(gl.POINTS, 0, 1);
}
window.onload = function () {
    main()
}