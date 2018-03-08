(function () {
    window.addEventListener('load', function setupWebGL(evt) {
        window.removeEventListener(evt.type, setupWebGL,false);
        let canvas = document.querySelector('#canvas-view'),
            button = document.querySelector('#button');
        canvas.addEventListener('click', switchColor, false);
        button.addEventListener('click', switchColor, false);
        let gl;
        function switchColor() {
            if(!gl){
                gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if(!gl){
                    alert("Failed to get WebGL context.\n"
                        + "Your browser or device may not support WebGL.");
                    return;
                }
            }
            gl.viewport(0,0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            let color = getRandomColor();
            gl.clearColor(color[0],color[1], color[2], 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        function getRandomColor() {
            return [Math.random(), Math.random(), Math.random()];
        }
    }, false);
})();