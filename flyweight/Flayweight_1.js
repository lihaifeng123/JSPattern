var Flyweight=function () {
    //  已创建的元素
    var created=[];
    //  创建一个新闻包装容器
    function create() {
        var dom=document.createElement('div');
        //  将容器插入新闻列表容器中
        document.getElementById('container').appendChild(dom);
        //  缓存新创建的元素
        created.push(dom);
        //  返回新的元素
        return dom;
    }
    return {
        //  获取创建新闻元素方法
        getDiv:function () {
            //  如果已创建的元素小于当前页元素总个数，就创建
            if(created.length<5){
                return create();
            }else{
                //  获取第一个元素并且插入最后面
                var div=created.shift();
                created.push(div);
                return div;
            }
        }
    }
}

var paper=0,
    num=5,
    len=article.length;
//  添加5条新闻
for(var i=0;i<5;i++){
    if(article[i]){
        //  通过享元获取创建的元素并且写入新闻内容
        Flyweight.getDiv().innerHTML=article[i];
    }
}
/////////////////////////////////////////////////////////////////////////////////////
//  下一页按钮绑定事件
document.getElementById('next_page').onclick=function () {
    //  如果新闻内容不足5条返回
    if(article.length<5){
        return;
    }
    var n=++paper*num%len,
        j=0;
    //  插入5条新闻
    for(;j<5;j++){
        //  如果存在第n+j条，插入
        if(article[n+j]){
            Flyweight.getDiv().innerHTML=article[i];
        //  否则插入起始位置第n+j-len条
        }else if(article[n+j-len]){
            Flyweight.getDiv().innerHTML=article[n+j-len];
        //  如果都不存在
        }else{
            Flyweight.getDiv().innerHTML="";
        }
    }
}