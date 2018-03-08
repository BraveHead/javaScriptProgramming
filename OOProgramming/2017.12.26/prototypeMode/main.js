(function () {
    //构造函数模式
    function person(age, name) {
        return age+ name;
    }

    //原型对象的模式
    function Person() {

    }

    Person.prototype = {
        constructor: Person,
        name: '张三',
        age: 10,
        friends: ["sb1","sb2"],
        sayName: function () {
            return 'My name is:'+ this.name;
        }
    };

    let person1 = new Person();
    let person2 = new Person();

    person1.friends.push('sb3');
    console.log(person1.friends, person2.friends);   //2个实例的sayName方法都指向原型的sayName方法，这样实例全部共享各自的属性，没法自定义实例

    //构造函数和原型模式的共用
    function PersonTwo(name, age) {
        this.name = name;
        this.age = age;
        this.friends = ['sb1','sb2'];
    }

    PersonTwo.prototype = {
        constructor: PersonTwo,
        sayName: function () {
            return 'My name is:'+ this.name;
        }
    };
    let personOne = new PersonTwo('李四',12);
    let personTwo = new PersonTwo('网二', 10);
    console.log(personOne.sayName(), personTwo.sayName());   //混用的模式是当前ECMAScript使用度最高，认同度最高的一种创建自定义类型的方法。
})();