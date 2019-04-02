//  访问器
var Visitor=(function(){
    return {
        //  截取方法
        splice:function(){
            //  从原参数第二个开始
            var args=Array.prototype.splice.call(arguments,1);
            //  对第一个参数对象执行splice方法
            return Array.prototype.splice.apply(arguments[0],args);
        },
        //  追加数据方法
        push:function () {
            //  强化数组对象，使其有length属性
            var len=arguments[0].length||0;
            //  添加的数据从原参数的第二个参数算起
            var args=this.splice(arguments,1);
            //  效正length属性
            arguments[0].length=len+arguments.length-1;
            //  对第一个参数对象执行push方法
            return Array.prototype.push.apply(arguments[0],args);
        },
        //  弹出最后添加的元素
        pop:function () {
            return Array.prototype.pop.apply(arguments[0]);
        }
    }
})();

var a=new Object();
Visitor.push(a,1,2,3,4);
console.log(a);