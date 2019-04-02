var bindEvent=function (dom,type,fn) {
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
    }else{
        dom['on'+type]=fn;
    }
}
var demo=document.getElementById('demo');
bindEvent(demo,'click',function(){
    this.style.background='red';
});