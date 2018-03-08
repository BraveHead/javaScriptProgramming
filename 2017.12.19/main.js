(function () {

    let person = {
        name: 'sanye',
        age: 10,
    };
    //instanceof  用来检测引用类型的对象
    console.log(person instanceof Object, person instanceof Array);

    //sort排序
    let sortArr = [1, 123,34,42,34,872];
    function completed(value1, value2) {
        return value1 - value2;
    }
    console.log(sortArr.sort(completed));

    //输出一个返回为n位数在2-32之间的不重复的数组c
    function backNumber(n) {
        if(typeof n !== "number" || n===0) return '';
        if(n>=32) return `位数不能大于${32}`;
        let arr = [];
        for(let i=0;i<n;i++){
            let number = parseInt(Math.random()*32);
            if(arr.indexOf(number)===-1){
                arr.push(number);
            }else{
                i--;
            }
        }
        return arr;
    }
    console.log(backNumber(31));

    //Date()  数据
    let date = new Date();
    console.log(date.toDateString(), date.toTimeString(),date.toUTCString(),);
})();