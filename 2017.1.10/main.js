
(function () {
    //DOM
    let app = document.getElementById('app');
    let app2 = document.getElementById('app2');
    // if(app.nodeType === 1){
    //     console.log(app.nodeName, app.nodeValue, app);
    // }
    app.addEventListener('click', function (ev) {
        console.log('>>>>');
    });
    let childNode = app.children;
    let parent = app.parentNode;
    let arrNodes = Array.prototype.slice.call(childNode,0);
    let firstChild = app.lastChild;

    //深复制和浅复制
    let deepClone = app.cloneNode(true);
    let shallClone = app.cloneNode(false);

    app2.innerHTML = deepClone.outerHTML;
    console.log(deepClone.toString(), shallClone);
    // app.removeChild(app.firstElementChild);
    let img = document.getElementsByClassName('img');
    console.log(img['img1']);
})();