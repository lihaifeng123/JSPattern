var ul=document.getElementById('container'),
    li=document.getElementsByTagName('li'),
    i=li.length-1;
for(;i>=0;i--){
    li[i].onclick=function () {
        this.style.backgroundcolor='gray';
    }
}
///////////////////////////////////////////////////////
ul.onclick=function (e) {
    var e=e||window.event,
        tar=e.target||e.srcElement;
    if(tar.nodeName.toLowercase()==='li'){
        tar.style.backgroundcolor='grey';
    }
}
//////////////////////////////////////////////////////
var article=document.getElementById('article');
article.onclick=function(){
    var e=e||window.event,
        tar=e.target||e.srcElement;
    if(tar.nodeName.toLowercase()==='p'){
        tar.innerHTML='我要更改这段内容';
    }
}
var p=document.createElement('p');
p.innerHTML='新增一段内容';
article.appendChild(p);
///////////////////////////////////////////////////////
