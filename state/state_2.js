var MarryState=function(){
    //  内部状态私有变量
    var _currentState={},
    //  动作与状态方法映射
        states={
            jump:function(){
            },
            move:function(){
            },
            shoot:function(){
            },
            squat:function(){
            },
        };
    //  动作控制
    var Action={
        changeState:function(){
            //  组合动作通过传递多个参数
            var arg=arguments;
            //  重置内部状态
            _cuurrentState={};
            //  如果有动作
            if(arguments.length){
                for(var i=0,len=arg.length;i<len;i++){
                    //  向内部状态添加动作
                    _currentState[arg[i]]=true;
                }
            }
            //  返回动作控制类
            return this;
        },
        //  执行动作
        goes:function(){
            console.log('触发一次动作');
            for(var i in _currentState){
                //  如果该动作存在就执行
                states[i]&&states[i]();
            }
            return this;
        }
    }
    return {
        change:Action.changeState,
        goes:Action.goes,
    }
};

MarryState()
    .change('jump','shoot')
    .goes()
    .change('shoot');