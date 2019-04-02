//  原型是继承
function inheritPrototype(o) {
    //  声明过度函数对象
    function F() { };
    //  过度对象的原型继承父对象
    F.prototype=o;
    //  返回过度对象的一个实例
    return new F();
}

function createBook(obj) {
    //  通过原型继承对象
    var o=new inheritPrototype(obj);
    //  扩展新对象
    o.getName=function () {
        console.log(name);
    };
    //  返回扩展对象
    return o;
}