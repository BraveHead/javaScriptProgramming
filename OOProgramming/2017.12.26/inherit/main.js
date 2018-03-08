(function () {
    //借用构造函数
   /* function SuperType() {
        this.colors = ['red','yellow','black'];
    }
    function SubType() {
        SuperType.call(this);
    }

    let instance1 = new SubType();
    instance1.colors.push('green');
    console.log(instance1.colors);

    let instance2 = new SubType();
    console.log(instance2.colors);*/


    //组合继承
    /*function SuperType(name) {
        this.name = name;
        this.colors = ['red','blue','green'];
    }
    SuperType.prototype.sayName = function () {
        console.log(this.name);
    };
    function SubType(name, age) {
        SuperType.call(this, name);      //第一次调用超类型构造函数
        this.age = age;
    }
    SubType.prototype = new SuperType();
    SubType.prototype.sayAge = function () {
        console.log(this.age);
    };

    let instance1 = new SubType('张三',12);    //第二次构造超类型构造函数
    instance1.sayAge();
    instance1.sayName();*/

    //寄生组合式方法
    function SuperType(name) {
        this.name = name;
        this.colors = ['red','yellow','blue'];
    }
    SuperType.prototype.sayName = function () {
        console.log(this.name);
    };
    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }
    function inheritPrototype(subType, superType) {
        let prototype = Object.create(superType.prototype);     //把超类型继承函数的原型赋给子类型继承函数的原型
        prototype.constructor = subType;
        subType.prototype = prototype;
    }
    inheritPrototype(SubType, SuperType);
    SubType.prototype.sayAge = function () {
        console.log(this.age);
    };

    let instance1 = new SubType('张三',12);
    instance1.sayAge();
    instance1.sayName();

})();