var Factory=function (type,content) {
    if(this instanceof Factory){
        var s=new this[type](content);
        return s;
    }else{
        return new Factory(type,content);
    }
}
//  工厂原型中设置创建所以类型数据对象的基类
Factory.prototype={
    //  创建Java学科
    Java:function (content) {
        //  把内容保存在content里面以后备用
        this.content=content;
        //  创建对象时，通过闭包，直接执行
        (function (content) {
            var div=document.createElement('div');
            div.innerHTML=content;
            div.style.color='green';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    //  创建Php学科
    Php:function (content) {
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
}
