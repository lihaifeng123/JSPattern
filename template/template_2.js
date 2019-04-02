//  格式字符串方法
function formatString(str,data){
    return str.replace(/\{#(\w+)#\}/g,function(match,key){return typeof data[key]===undefined?'':data[key]});
}
//  基础导航
var Nav=function (data) {
    //  基础导航样式模板
    this.item='<a herf="{#herf#}" title="{#title#}">{#name#}</a>';
    //  创建字符串
    this.html='';
    //  格式化数据
    for(var i=0,len=data.length;i<len;i++){
        this.html+=formatString(this.item,data[i]);
    }
    //  返回字符串数据
    return this.html;
}
//  带有消息提醒信息导航
var NumNav=function(data){
    //  消息提醒模板
    var tpl='<b>{#num#}</b>';
        //  格式化数据
    for(var i=0,len=data.length;i<len;i++){
        data[i].name+=data[i].name+formatString(tpl,data[i]);
    }
    //  
    return Nav.call(this,data);
}

//  获取导航容器
var nav=documet.getElementById('content');
//  添加内容
nav.innerHTML=NumNav([
    {
        href:'http://www.baidu.com',
        title:'bd',
        name:'百度',
        num:10
    }
])