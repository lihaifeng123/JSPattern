/**
 * 异步请求对象(简化版本)
 * @param {*} data 
 * @param {*} dealType 
 * @param {*} dom 
 */
var sendData=function(data,dealType,dom){
    //  XHR对象 简化版本
    var xhr=new XMLHttpRequest(),
        //  请求路径
        url='getData.php?mod=userInfo';
    //  请求返回事件
    xhr.onload=function(event){
        //  请求成功
        if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
            dealData(xhr.responseText,dealType,dom);
        }else{
            //  请求失败
        }
        //  拼接请求字符串
        for(var i in data){
            url+='&'+i+'='+data[i];
        }
        //  发送异步请求
        xhr.open("get",url,true);
        xhr.send(null);
    }
}

/**
 * 处理响应数据
 * @param {*} data 
 * @param {*} dealType 
 * @param {*} dom 
 */
var dealData=function(data,dealType,dom){
    var dataType=Object.prototype.toString.call(data);
    //  判断相应数据处理对象
    switch(dealType){
        //  提示框
        case 'sug':
            if(dataType==="[object Array]"){
                //  创建提示框
                return createSug(data,dom);
            }
            //  把响应的对象转化为数组
            if(dataType==="[object Object]"){
                var newData=[];
                for(var i in data){
                    newData.push(data[i]);
                }
                return createSug(newData,dom);
            }
            return createSug([data],dom);
            break;
        case 'validate':
            //  创建验证组件
            return createValidateResult(data,dom);
            break;
    }
}

/**
 * 创建提示框
 * @param {*} data 
 * @param {*} dom 
 */
var createSug=function (data,dom) {
    var i=0,
        len=data.length,
        html='';
    //  拼接每一条提示语句
    for(;i<len;i++){
        html+=`<li>${data[i]}</li>`
    }
    //  显示提示框
    dom.parentNode.getElementsByTagName('ul')[0].innerHTML=html;
}

var createValidataResult=function (data,dom) {
    //  显示验证结果
    dom.parentNode.getElementsByTagName('span')[0].innerHTML=data;
}

//  eg
dealData(123,'sug',document.getElementsByName('input')[0]);