(function () {
    /**
     * @param val {String}
     * @param str {String}
     * @returns {Promise<any> | Promise<Response> | RegExpMatchArray | *}
     */
    function matchValue(val,str) {
        return val.match(str);
    }
    //Math and apply
    function getMaxNumber() {
        let arr = [12,8,20,9,23];
        // return Math.max.apply(Math, arr);
        return Math.min.apply(Math, arr);
    }
    console.log(getMaxNumber());
})();