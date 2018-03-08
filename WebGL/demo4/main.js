(function () {
    window.addEventListener('load', function setupWebGL(evt) {
        window.removeEventListener(evt.type, setupWebGL,false);
        let canvas = document.querySelector('#canvas-view'),
            button = document.querySelector('#button'),
            butCon = document.querySelector('#but-con');
        let time;
        function startAnimation(evt) {
            button.removeEventListener(evt.type, startAnimation, false);
            button.addEventListener('click', stopAnimation,false);
            butCon.innerHTML = 'Start';
            time = setInterval(drawAnimation, 1000);
            drawAnimation();
        }
        function stopAnimation(evt) {
            button.removeEventListener(evt.type, stopAnimation, false);
            button.addEventListener('click', startAnimation, false);
            butCon.innerHTML = 'Stop';
            clearInterval(time);
        }
        stopAnimation({type:'click'});
        let gl;
        function drawAnimation() {
            if(!gl){
                gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if(!gl){
                    alert("Failed to get WebGL context.\n"
                        + "Your browser or device may not support WebGL.");
                    clearInterval(time);
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