//  创建Java学科
var Java=function (content) {
    //  把内容保存在content里面以后备用
    this.content=content;
    //  创建对象时，通过闭包，直接执行
    (function (content) {
        var div=document.createElement('div');
        div.innerHTML=content;
        div.style.color='green';
        document.getElementById('container').appendChild(div);
    })(content);
}
//  创建Php学科
var Php=function (content) {
    //  把内容保存在content里面以后备用
    this.content=content;
    //  创建对象时，通过闭包，直接执行
    (function (content) {
        var div=document.createElement('div');
        div.innerHTML=content;
        div.style.color='yellow';
        div.style.backgroundColor='red';
        document.getElementById('container').appendChild(div);
    })(content);
}

//  学科工厂
function JobFactory(type,content) {
    switch (type) {
        case 'java':
            return new Java(content);
            break;
        case 'php':
            return new Php(content);
            break;
        default:
            return new Object();
            break;
    }
}

var book=JobFactory('java',"Java Book");