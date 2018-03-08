(function () {
    window.addEventListener('load', function setupWebGL(evt) {
        window.removeEventListener(evt.type, setupWebGL, false);
        let paragraph = document.querySelector('p'),
            canvas = document.querySelector('canvas');
        let gl = canvas.getContext('webgl') ||canvas.getContext('experiment-webgl');
        if(!gl){
            paragraph.innerHTML = "Failed to get WebGL context. "
                + "Your browser or device may not support WebGL.";
            return;
        }
        gl.viewport(0,0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(40,20,60,100);
        gl.clearColor(1.0, 1.0,0.0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }, false);
})();