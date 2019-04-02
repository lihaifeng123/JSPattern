var CheckObject=function () {   };

CheckObject.prototype={
    checkName:function () {
        //  CheckName
        return this;
    },
    checkEmail:function () {
        //  CheckEmail
        return this;
    },
    checkPassword:function () {
        //  CheckPassword
        return this;
    }
}

var check=new CheckObject();
check.checkEmail().checkPassword().checkName();