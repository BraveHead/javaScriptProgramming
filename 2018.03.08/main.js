(function () {
    //Promise   就是一个容器   里面保存着某个未来才会结束的事件的结果。

    function asyncFunction() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('Async Hello World!');
            }, 2000)
        })
    }

    asyncFunction().then(function (value) {
        console.log(value)
    }).catch(function (error) {
        console.log(error);
    });

    //ajax  Promise异步处理方式获取数据

    function getUrl(url) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.open('GET',url, true);
        })
    }
    //
    var proxy = new Proxy({}, {
        get: function(target, property) {
            return 35;
        }
    });

    proxy.time // 35
    proxy.name // 35
    proxy.title // 35
    console.log(proxy.time);

})();