//  获取事件对象
var getEvent=function (event) {
    return event||window.event;
}
//  获取元素
var getTarget=function (event) {
    var event=getEvent(event);
    //  标准浏览器下event.Target,IE下是event.srcElement;
    return event.target||event.srcElement;
}
//  阻止默认行为
var preventDefault=function (event) {
    var event=getEvent(event);
    //  标准浏览器
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
}

document.onclick=function (e) {
    preventDefault(e);
    if(getTarget(e)!==document.getElementById('myinput')){
        hideInputSug&&hideInputSug();
    }
}