(function () {
    //理解参数
    function sayHi() {
        console.log('Hello,' + arguments[0], arguments[1]);
    }
    sayHi('杭三', 'sb');
    //引用类型的引用
    let obj1 = {
        name: '张三',
        age: 12
    };
    let obj2 = obj1;
    obj2.name = '李四';
    console.log(obj1.name, obj2.age);
})();