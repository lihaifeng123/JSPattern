//  打包统计对象
var LogPack=function(){
    var data=[],                //  请求缓存数组
        MaxNum=10,              //  请求缓存最大值
        itemSplitStr='|',       //  统计项统计参数间隔符
        keyValueSplitStr='*',   //  统计项统计参数keyv-value间隔符
        img=new Image();        //  请求触发器，通过图片的src实现get请求
    
    //  发送请求方式
    function sendLog(){
        //  请求参数
        var logStr='',
            //  获取MaxNum个统计项发送
            fireData=data.splice(0,MaxNum);
        //  遍历统计项
        for(var i=0,len=fireData.length;i<len;i++){
            //  添加统计项顺序索引
            logStr+='log'+i+'=';
            //  遍历统计项内的统计参数
            for(var j in fireData[i]){
                //  添加添加项参数键+间隔符+值
                logStr+=j+keyValueSplitStr+fireData[i][j];
                //  添加统计项参数间隔符
                logStr+=itemSplitStr;
            }
            //  &符拼接多个统计项
            logStr=logStr.replace(/\|$/,'')+'&';
        }
        //  添加统计项打包长度
        logStr+='logLength='+len;
        //  请求触发器发送统计
        img.src='a.git?'+logStr;
    }

    //  统计方法
    return function(param){
        //  如果无参数就发送统计
        if(!param){
            sendLog();
            return;
        }
        //  添加添加项
        data.push(param);
        //  如果统计项大于请求缓存最大值就发送统计请求包
        data.length>=MaxNum&&sendLog();

    }
    

}

////////////////////////////////////////////////////////////////////////////////////////\
btn.onclick=function(){
    LogPack({
        btnId:this.id,
        context:this.innerHTML,
        type:'click'
    });
}
//  点击统计
btn.onmouseover=function(){
    LogPack({
        btnId:this.id,
        context:this.innerHTML,
        type:'onmouseover'
    });
}