//  将观察者放在闭包中
var Observer=(function(){
    //  避免消息队列泄露而被篡改把消息容器作为静态私有变量保存
    var __messages={};
    return {
        //  注册窗口
        regist:function(type,fn){
            //  如果该消息不存在应创建一个该消息类型
            if(typeof __messages[type]=='undefined'){
                //  将动作推入到该消息对应的动作执行队列
                __messages[type]=[fn];
            }else{
                //  将动作推入该消息对应的动作执行序列中
                __messages[type].push(fn);
            }
        },
        //  发布信息接口
        fire:function(type,args){
            //  如果该消息没有注册，返回
            if(!__messages[type]){
                return;
            }
            //  定义消息信息
            var events={
                type:type,
                args:args||{},
            };
            i=0;
            len=__messages[type].length;
            //  遍历消息动作
            for(;i<len;i++){
                __messages[type][i].call(this,events);
            }
        },
        //  移除信息接口
        remove:function(type,fn){
            //  如果消息队列存在
            if(__messages[type] instanceof Arrayy){
                //  从最后一个动作遍历
                var i=__messages[type].length-1;
                for(;i>=0;i--){
                    //  如果存在该动作就在消息动作序列中删除相应动作
                    __messages[type][i]===fn&&__messages[type].splice(i,1);
                }
            }
        },
    }
})();

Observer.regist('test',(e)=>{
    console.log(e.type,e.args);
});
Observer.fire('test',{msg:'测试'});

export default Observer;