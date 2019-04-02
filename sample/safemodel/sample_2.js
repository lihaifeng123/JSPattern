var Book=function (title,time,type) {
    if(this instanceof Book){
        this.title=title;
        this.time=time;
        this.type=type;
    }else{
        return new Book(title,time,type);
    }
}
var book=Book("js","2018",1);
console.log(book);

console.log(this.time,this.title,this.type);