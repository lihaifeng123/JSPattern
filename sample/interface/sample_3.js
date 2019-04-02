function SuperClass(name){
    this.books=["js","html","css"];
    this.name=name;
}

SuperClass.prototype.getName=function () {
    conole.log(this.name);
}

function SubClass(name,time) {
    /**
    *   由于call方法可以更改函数的作用环境，因此
    *   SuperClass.call(this,id)是把子类变量在父类中执行了一遍
    *   由于父类是给this绑定的属性所以子类就继承了该属性
     */
    SuperClass.call(this,name);
    this.time=time;
}
SubClass.prototype=new SuperClass();

var instance1=new SubClass(10);

var instance2=new SubClass(11);

instance1.books.push("设计模式");

console.log(instance1.books);

console.log(instance2.books);

instance1.showBooks();