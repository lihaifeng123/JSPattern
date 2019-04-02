var A={
    g:function (id) {
        return document.getElementById(id);
    },
    css:function (id,key,value) {
        document.getElementById(id).style[key]=value;
    },
    attr:function (id,key,value) {
        document.getElementById(id)[key]=value;   
    },
    html:function (id,html) {
        document.getElementById(id).innerHTML=html;
    },
    on:function (id,type,fn) {
        document.getElementById(id)['on'+type]=fn;
    }
}

A.css('box','background','red');