//  中介者对象
var Mediator=function(){
    //  消息对象
    var _msg={};
    return {
        /**
         * 订阅消息方法
         * @param {*} type 消息名称
         * @param {*} action 消息回调方法
         */
        register:function(type,action){
            //  如果该消息存在
            if(_msg[type]){
                //  存入回调函数
                _msg[type].push(action);
            }else{
                //  消息不存在
                _msg[type]=[];
                _msg[type].push(action);
            }
        },
        /**
         * 发布消息方法
         * @param {*} type  消息名称 
         */
        send:function(type){
            //  如果该消息被订阅
            if(_msg[type]){
                //  遍历已存储的消息回调函数
                for(var i=0,len=_msg[type].length;i<len;i++){
                    //  执行回调函数
                    _msg[type][i]&&_msg[type][i]();
                }
            }
        }
    }
}();
//  测试
Mediator.register('demo',function(){
    console.log('demo');
});
Mediator.register('demo',function(){
    console.log('demo1');
});

Mediator.send('demo');