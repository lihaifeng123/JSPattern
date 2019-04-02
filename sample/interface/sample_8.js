//  多继承  属性复制
var mix=function () {
    var i=1,                        //
        len=arguments.length,
        target=arguments[0],
        arg;

        for(;i<len;i++){
            arg=arguments[i];
            for(var prototype in arg){
                target[prototype]=arg[prototype];
            }
        }

        return target;
}