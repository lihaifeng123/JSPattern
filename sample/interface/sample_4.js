//  原型是继承
function inheritPrototype(o) {
    //  声明过度函数对象
    function F() { };
    //  过度对象的原型继承父对象
    F.prototype=o;
    //  返回过度对象的一个实例
    return new F();
}

var books={
    name:"js book",
    alikeBook:["css book","html book"],
};

var newBook=inheritPrototype(books);
console.log(newBook);
newBook.alikeBook.push("c books");

var otherBook=inheritPrototype(books);
console.log(otherBook);