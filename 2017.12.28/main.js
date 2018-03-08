(function () {
    //闭包和变量
    function createFunction() {
        let result = [];
        for(let i=0;i<10;i++){
            result[i] = function () {
                return i;
            };
        }
        return result;
    }
})();