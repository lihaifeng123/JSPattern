//  投票结果状态对象
var ResultState=function(){
    //  判断结果保存在内部状态中
    var States={
        //  每种状态作为一种独立方法保存
        state0:function(){
            //  处理结果0
        },
        state1:function(){
            //  处理结果1
        },
        state2:function(){
            //  处理结果2
        },
        state3:function(){
            //  处理结果3
        },
    }
    //  获取某个状态方法并且执行
    function show(result){
        States['state'+result]&&States['state'+result]();
    }
    return {
        show:show,
    }
}

ResultState.show(3);