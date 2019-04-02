//  声明继承
//  声明父类
function SuperClass(params) {
    this.superValue=true;
}

//  为父类添加公共方法
SuperClass.prototype=getSuperValue=function () {
    return this.superValue;
}

//  声明子类
function SubClass() {
    this.subValue=false;
}

//  继承父分
SubClass.prototype=new SuperClass();
//  为子类添加公有方法
SubClass.prototype.getSubValue=function () {
    return this.subValue;
}

var instance=new SubClass();
console.log(instance.getSubValue())
console.log(instance.getSuperValue())