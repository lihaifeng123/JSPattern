/****
 * 基于已存在的对象克隆出新的对象
 * arguments[0],arguments[1]...:参数表示模板对象
 * 注意。这里对模板引用类型的属性机械浅复制（引用类型属性共享），也可以根据需求进行深度复制
 */
function prototypeExtend() {
    var F=function () { },  //缓存对象
    args=arguments,          //模板对象参数序列
    i=0,
    len=args.length;
    for(;i<len;i++){
        //  遍历每个模板对象的属性
        for(var j in args[i]){
            //  把这些属性复制到缓存类型中
            F.prototype[j]=args[i][j];
        }
    }
    //  返回缓存类的一个实例
    return new F();
}

var penguin=prototypeExtend({
    speed:20,
    swim:function () {
        console.log("测试1");
    }
},{

});
penguin.swim();