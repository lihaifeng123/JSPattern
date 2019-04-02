var Book=function (title,time,type) {
    this.title=title;
    this.time=time;
    this.type=type;
}
var book=Book("js","2018",1);
console.log(book);

console.log(this.time,this.title,this.type);