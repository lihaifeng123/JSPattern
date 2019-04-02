Function.prototype.addMethod=function (name,method) {
    this[name]=method;
}

var check=new Function();
check.addMethod("checkName",function(){
    // CheckName
});
check.addMethod("checkPassword",function(){
    // CheckPassword
});
check.addMethod("checkEmail",function(){
    // CheckEmail
});

check.checkName();