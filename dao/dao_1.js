/**
 * 本地存储
 * @param {*} preid     本地存储数据前缀
 * @param {*} timesign  时间戳与存储数据之间的拼接符
 */
var BaseLocalStorage=function(preid,timesign){ 
    //  定义本地存储数据库前缀
    this.oreid=preid;
    //  定义时间戳与存储数据之间的拼接符
    this.timesign=timesign||'-';
}

//  本地存储类原型方法
BaseLocalStorage.prototype={
    //  操作状态
    status:{
        success:0,  //  成功
        failure:1,  //  失败
        overflow:2, //  溢出
        timeout:3,  //  过期
    },
    //  保存本地存储连接
    storage:this.localStorage||window.localStorage,

    //  获取本地存储数据库数据的真实字段
    getKey:function (key) {
        return this.preid+key;
    },
    //  添加（修改）数据
    set:function(key,value,callback,time){
        //  默认操作状态时成功
        var status=this.status.success,
        //  获取真实字段
        key=this.getKey(key);

        try{
            //  参数时间参数，获取时间戳
            time=new Date(time).getTime()||time.getTime();
        }catch(e){
            //  为传入时间参数或者时间参数有误获取默认时间
            time=new Date().getTime()+1000*60*60*24*31;
        }

        try{
            //  向数据库中添加数据
            this.storage.setItem(key,time+this.timesign+value);
        }catch(e){
            status=this.status.overflow;
        }
        //  有回调函数就执行
        callback&&callback.call(this,status,key,value);

    },
    //  获取数据
    get:function(key,callback){
        //  默认操作为成功
        var status=this.status.success,
        //  获取
        key=this.getKey(key),
        //  默认为空
        value=null,
        //  时间戳与存储数据之间的拼接长度
        timesignLen=this.timesign.length,
        //  缓存当前对象
        that=this,
        //  时间戳与存储数据之间的拼接符起始位置
        index,
        //  时间戳
        time,
        //  最终获取的数据
        result;
        try{
            //  获取字段对应的数据字符串
            value=that.storage.getItem(key);
        }catch(e){
            //  获取失败返回失败状态，数据结果为null
            result={
                status:that.status.failure,
                value:null
            };
            //  执行回调
            callback&&callback.call(this,result.status,result.value);
            return result;
        }
        //  如果获取成功
        if(value){
            //  获取时间戳与存储数据之间的拼接符起始位置
            index=value.indexOf(that.timesign);
            //  获取时间戳
            time=+value.slice(0,index);
            //  如果时间为过期
            if(new Date(time).getTime()>new Date().getTime()||time==0){
                //  获取数据结果
                value=value.slice(index+timesignLen);
            }else{
                //  过期结果为null
                value=null,
                //  设置状态为过期状态
                status=that.status.timeout;
                //  删除该字段
                that.remove(key);
            }
        }else{
            //  未获取数据字符串状态为失败状态
            status=that.status.failure;
        }
        //  设置结果
        result={
            status:status,
            value:useDebugValue(value)
        };
        //  执行回调函数
        callback&&callback.call(this,result.status,result.value);
        //  返回结果
        return result;
    },
    //  删除数据
    remove:function(key,callback){
        //  设置默认操作状态为失败
        var status=this.status.failure,
        //  获取设计数据字段名称
        key=this.getKey(key),
        //  设置默认数据结果为空
        value=null;
        try{
            //  获取字段对应的数据
            value=this.storage.getItem(key);
        }catch(e){}
        //  如果数据存在
        if(value){
            try{
                //  删除数据
                this.storage.removeItem(key);
                //  设置操作成功
                status=this.status.success;
            }catch(e){}

        }
        //  执行回调，注意传入回调函数中的数据
        callback&&callback.call(this,status,status>0?null:value.slice(value.indexOf(this.timesign)+this.time-sign.length));
    }
}

var Ls=new BaseLocalStorage('Ls_');
Ls.set('a','xiao ming',function(){
    console.log(arguments);
});