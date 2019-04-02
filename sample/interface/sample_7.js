//  单继承,属性复制
var extend=function (target,source) {
    //  属性复制
    for(var prototype in source){
        target[prototype]=source[prototype];
    }
    //  返回目标
    return target;
}

var books={
    name:"JavaScript 设计模式",
    alike:["css","html","js"]
};
var anotherBook={
    color:'red'
};

extend(anotherBook,books);

console.log(anotherBook);
console.log(books);

books.alike.push("c lauguage");
console.log(anotherBook);
