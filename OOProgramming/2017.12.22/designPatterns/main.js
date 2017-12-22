(function () {
    //工厂模式
    function createPerson(name, age,sex) {
        let o = {};
        o.name = name;
        o.age = age;
        o.sex = sex;
        o.printMsg = function () {
            return 'Hello,'+o.name + ',我现在'+ o.age + '了，我性别是：'+ o.sex;
        };
        return o;
    }
    let personOne = createPerson('张三', 10, '男');
    let personTwo = createPerson('李四', 11, '女')

    //构造函数模式
    function CreatePerson(name, age, sex) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this.printMsg = function () {
            return 'Hello,'+this._name + ',我现在'+ this._age + '了，我性别是：'+ this._sex;
        }
    }

    let person1 = new CreatePerson('张三', 12, '男');
    let person2 = new CreatePerson('张四', 12, '女');

    CreatePerson.call(Math,'张三', 12, '男');     //call和 apply就是把CreatePerson的属性全都搬到Math的属性上
    console.log(Math.printMsg(),'>>>');
    console.log(person1.constructor === CreatePerson, person2.printMsg());

})();