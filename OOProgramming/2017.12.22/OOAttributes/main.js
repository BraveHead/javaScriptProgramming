(function () {
    let person = {};
    //数据属性
    Object.defineProperty(person, 'name',{
        writable: false,
        value: 'sb'
    });
    console.log(person.name);
    person.name = 'caonima';   //被设置成不可修改
    console.log(person.name);
    let book = {
        _year: 2004,
        edition: 1
    };
    //访问器属性
    Object.defineProperty(book,'year', {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if(value > this._year){
                this.edition += value - this._year;
                this._year = value;
            }
        }
    });
    book.year = 2005;
    console.log(book.edition);
    //定义多个属性
    let books = {};
    Object.defineProperties(books, {
        _year : {
            writable: true,
            value: 2004,
        },
        edition: {
            writable: true,
            value: 1,
        },
        year: {
            get: function () {
                return this._year;
            },
            set: function (value) {
                if(value > this._year){
                    this.edition += value- this._year;
                    this._year = value;
                }
            }
        }
    });
    books.year = 2005;
    console.log(books.edition);
})();