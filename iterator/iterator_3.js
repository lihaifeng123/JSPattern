//  同步变量
var A={
    //  所有用户共有
    common:{},
    //  客户端数据
    client:{
        user:{
            username:'abc',
            uid:'123',
        }
    },
    //  服务器数据
    server:{}
};

//  同步变量迭代取值器
AGetter=function(key){
    //  如果不存在A就返回未定义
    if(!A){
        return undefined;
    }
    var result=A;
    key=key.split('.');
    //  迭代同步变量A对象属性
    for(var i=0,len=key.length;i<len;i++){
        //  如果第i层属性存在对应的值就迭代该属性
        if(result[key[i]]!==undefined){
            result=result[key[i]];
        }else{
            return undefined;
        }
    }
    //  获取返回结果
    return result;
}
//  获取用户名数据
console.log(AGetter('client.user.username'));

//  同步变量迭代器setter
ASetter=function(key,val){
    //  如果不存在A就返回未定义
    if(!A){
        return false;
    }
    var result=A;
    key=key.split('.');
    //  迭代同步变量A对象属性
    for(var i=0,len=key.length;i<len-1;i++){
        //  如果第i层属性对应的值不存在，就定义对象
        if(result[key[i]]===undefined){
            result[key[i]]={};
        }
        //  如果第i层属性对应的值不是对象的一个实例，抛出错误
        if(!(result[key[i]] instanceof Object)){
            throw new Error('A.'+key.splice(0,i+1),join('.')+' is not Object');
            return false;
        }
        //  迭代该层属性值
        result=result[key[i]];
    }
    //  返回设置超过的属性值
    return result[key[i]]=val;
}
//  缓存添加相关数据
console.log(ASetter('client.module.news.sports','on'));