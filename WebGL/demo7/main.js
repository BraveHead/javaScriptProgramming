(function () {
    window.addEventListener('load', setupAnimation, false);
    let gl,
        clickNumber = document.querySelector('strong')[0],
        missNumber = document.querySelector('strong')[1],
        canvas = document.querySelector('canvas');
    function setupAnimation(evt) {
        window.removeEventListener(evt.type, setupAnimation, false);
        if(!(gl=getContextGl())){
            return ;
        }
        gl.enable(gl.SCISSOR_TEST);
    }

    function Rectangle() {
        let rect = this;
    }



    function getContextGl() {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if(!gl){
            document.querySelector('p').innerHTML = '不支持WebGL!';
            return null;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth,  gl.drawingBufferHeight);
        gl.clearColor(0,0,0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        return gl;
    }
})();