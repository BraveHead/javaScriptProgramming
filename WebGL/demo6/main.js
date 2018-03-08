window.addEventListener('load', setupAnimation, false);
let gl,
    color = getRandomColor(),
    position,
    size = [60,60],
    velocity = 3.0,
    timer;
function setupAnimation(evt) {
    window.removeEventListener(evt.type, setupAnimation, false);
    let canvas = document.querySelector('canvas'),
        button = document.querySelector('button'),
        text = document.querySelector('span')
    gl = canvas.getContext('webgl') || canvas.getContext('experiment-webgl');
    position = [0, gl.drawingBufferHeight];
    if(!gl){
        alert('不支持WebGL！');
    }
    gl.enable(gl.SCISSOR_TEST);
    gl.clearColor(color[0], color[1],color[2], 1.0);
    function startAnimation(evt) {
        button.removeEventListener(evt.type,startAnimation, false);
        button.addEventListener('click', stopAnimation, false);
        text.innerHTML = 'Stop';
        timer = setInterval(drawAnimation, 17);
        drawAnimation();
    }
    function stopAnimation(evt) {
        button.removeEventListener(evt.type, stopAnimation,false);
        button.addEventListener('click', startAnimation, false);
        text.innerHTML = 'Start';
        clearInterval(timer);
    }
    stopAnimation({type:'click'});
}
function drawAnimation() {
    gl.scissor(position[0],position[1],30, 30);
    gl.clear(gl.COLOR_BUFFER_BIT);
    position[1] -= velocity;
    if(position[1]<0){
        position[0] = Math.random()*(gl.drawingBufferWidth - size[0]);
        position[1] = gl.drawingBufferHeight;
        velocity = 1.0 + 6*Math.random();
        color = getRandomColor();
        gl.clearColor(color[0], color[1],color[2], 1.0);
    }
}

function getRandomColor() {
    return [Math.random(), Math.random(), Math.random()];
}