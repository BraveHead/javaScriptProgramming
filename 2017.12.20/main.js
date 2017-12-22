(function () {
    //函数内部属性

    //阶乘的例子
    function factorial(num) {
        if(num<=1){
            return num;
        }else{
            return num*arguments.callee(num-1);     //arguments.callee指向拥有该arguments的函数
        }
    }

    let num = 10;
    /**
     *  //toFixed()
     * @param num  Number
     * @returns {string}
     */
    function returnNumber(num) {
        return num.toFixed(2);
    }
    
})();