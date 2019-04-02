//  定义框架
var A=A||{};
//  通过id获取数据
A.g=function(id){
    return document.getElementById(id);
}
//  为元素绑定事件
A.on=function (id,type,fn) {
    var dom=typeof id==='string'?this.g(id):id;

    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
    }else{
        dom['on'+type]=fn;
    }
}
//  窗口加载完成事件
A.on(window,'load',function(){
    A.on('mybutton','click',function(){
        //  do somethings
    })
});
/////////////////////////////////////////////////////////
$=JQuery;
A.g=function (id) {
    return $(id).get(0);
}
A.on=function (id,type,fn) {
    var dom=typeof id==='string'?$('#'+id):$(id);
    dom.on(type,fn);
}