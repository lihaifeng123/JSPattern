//  外观模式
function addEvent(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
    }else{
        dom['on'+type]=fn;
    }
}
var myInput=document.getElementById('myinput');
addEvent(myInput,'click',function () {
    console.log("绑定第一个事件");
});
