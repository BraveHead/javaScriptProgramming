(function () {
    let paragraph = document.querySelector('p'),
        button = document.querySelector('button');
    button.addEventListener('click',detectWebGlContext, false);
    function detectWebGlContext() {
        let canvas = document.createElement('canvas');
        let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if(gl && gl instanceof WebGLRenderingContext){
            paragraph.innerHTML = 'Congratulations! Your browser supports WebGL.';
        }else{
            paragraph.innerHTML = 'Failed to get WebGL.' + 'Your browser or device may not support WebGL.';
        }
    }

})();
