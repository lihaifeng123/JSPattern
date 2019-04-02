Function.prototype.addMethod=function (name,method) {
    this[name]=method;
    return this;
}

var check=new Function();
check.addMethod("checkName",function(){
    // CheckName
}).addMethod("checkPassword",function(){
    // CheckPassword
}).addMethod("checkEmail",function(){
    // CheckEmail
});

check.checkName();