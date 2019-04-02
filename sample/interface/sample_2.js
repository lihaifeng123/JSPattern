function SuperClass(id){
    this.books=["js","html","css"];
    this.id=id;
}

SuperClass.prototype.showBooks=function () {
    conole.log(this.books);
}

function SubClass(id) {
    /**
    *   由于call方法可以更改函数的作用环境，因此
    *   SuperClass.call(this,id)是把子类变量在父类中执行了一遍
    *   由于父类是给this绑定的属性所以子类就继承了该属性
     */
    SuperClass.call(this,id);
}

var instance1=new SubClass(10);

var instance2=new SubClass(11);

instance1.books.push("设计模式");

console.log(instance1.books);

console.log(instance2.books);

instance1.showBooks();