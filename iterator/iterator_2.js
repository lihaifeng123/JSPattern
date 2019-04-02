//  数组迭代器
var eachArray=function(arr,fn){
    var i=0,
        len=arr.length;
    //  遍历数组
    for(;i<len;i++){
        //  依次执行回调函数
        if(fn.call(arr[i],i,arr[i])===false){
            break;
        }
    }
}

var arr=[0,1,2,3,4];
eachArray(arr,function(i,data){
    console.log(i,',',data);
});

//  对象迭代器
var eachObject=function(obj,fn){
    //  遍历对象的属性
    for(var i in obj){
        if(fn.call(obj[i],i,obj)===false){
            break;
        }
    }
}

var obj={
    a:1,
    b:2,
}
eachObject(obj,function(i,data){
    console.log(i,data);
})