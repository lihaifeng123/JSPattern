var A=function(){
    return B;
}
var B=A.prototype={
    length:2,
    size:function () {
        return this.length;
      }
}
console.log(A().size())