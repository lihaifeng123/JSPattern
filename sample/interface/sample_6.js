//  原型是继承
function inheritPrototype(o) {
    //  声明过度函数对象
    function F() { };
    //  过度对象的原型继承父对象
    F.prototype=o;
    //  返回过度对象的一个实例
    return new F();
}

/**
 *  寄生式继承    继承原型
 *  传递参数 supClass
 *  传递参数 superClass 
 */
function inheritPrototype(subClass,superClass) {
    var p=inheritPrototype(superClass.prototype);
    p.constructor=subClass;
    subClass.prototype=p;
}

function SuperClass(name) {
    this.name=name;
    this.colors=["red","blue","green"];
}

SuperClass.prototype.getName=function () {
    console.log(this.name);
}


function SubClass(name,time) {
    SuperClass.call(this,name);
    this.time=time;
}

inheritPrototype(SubClass,SuperClass);

SubClass.prototype.getTime=function () {
    console.log(this.time);
}

var instance1=new SubClass("js book",2014);
var instance2=new SubClass("css book",2013);

instance1.colors.push("black");

console.log(instance1.colors);
console.log(instance2.colors);

instance1.getName();
instance2.getName();