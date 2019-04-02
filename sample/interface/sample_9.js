//  多继承  属性复制
Object.prototype.mix=function () {
    var i=0,                        //
        len=arguments.length,
        target=this,
        arg;

        for(;i<len;i++){
            arg=arguments[i];
            for(var prototype in arg){
                target[prototype]=arg[prototype];
            }
        }

        return target;
}
var books={
    name:"JavaScript 设计模式",
    alike:["css","html","js"]
};
var anotherBook={
    color:'red'
};
anotherBook.mix(books);
console.log(anotherBook)