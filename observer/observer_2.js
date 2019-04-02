import Observer from './observer_1';

//  外观模式
function $(id){
    return document.getElementById(id);
}

//  工程师A
(function(){
    //  追加一个消息
    function addMsgItem(e){
        var text=e.args.text,
            ul=$('msg'),
            li=document.createElement('li'),
            span=document.createElement('span');

        li.innerHTML=text;
        //  关闭按钮
        span.onclick=function(){
            ul.removeChild(li);
            Observer.fire('removeCommentMessage',{
                num:-1
            });
        }
        //  添加删除按钮
        li.appendChild(span);
        //  添加留言按钮
        li.appendChild(li);
    }
    //  注册添加评论信息
    Observer.regist('addCommentMessage',addMsgItem);
})();