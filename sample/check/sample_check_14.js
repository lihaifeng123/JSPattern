Function.prototype.addMethod=function (name,method) {
    this[name]=method;
    return this;
}

var check=new Function();
check.addMethod("checkName",function(){
    // CheckName
    return this;
}).addMethod("checkPassword",function(){
    // CheckPassword
    return this;
}).addMethod("checkEmail",function(){
    // CheckEmail
    return this;
});

check.checkName().checkEmail();