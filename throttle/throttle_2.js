//  外观模式封装获取元素方法
function $(id){
    return document.getElementById(id);
}
function $tag(tag,container){
    container=container||document;
    return container.getElementsByTagName(tag);
}
//  浮层类
var Layer=function(id){
    //  获取容器
    this.container=$(id);
    //  获取容器中的浮层容器
    this.layer=$tag('div',this.container)[0];
    //  获取icon容器
    this.lis=$tag('li',this.container);
    //  获取二维码
    this.imgs=$tag('img',this.container);
    //  绑定事件
    this.bindEvent(); 
}

Layer.prototype={
    //  绑定交互事件
    bindEvent:function(){
        //...\
        //  缓存当前对象
        var that=this;
        //  隐藏浮层
        function hideLayer(){
            that.layer.className='';
        }
        //  显示浮层
        function showLayer(){
            that.layer.className='show';
        }
        //  鼠标光标移入事件
        that.on(that.container,'mouseenter',function(){
            //  清除隐藏浮层方法计时器
            throttle(true,hideLayer);
            //  延迟显示
            throttle(showLayer);
            //  鼠标光标移出事件
        }).on(that.container,'mouseleave',function(){
            //  延迟延迟
            throttle(hideLayer);
            //  清除显示
            throttle(true,showLayer);
        });
        //  遍历icon绑定事件
        for(var i=0;i<that.lis.length;i++){
            //  自定义属性index
            that.lis[i].index=i;
            //  为每一个li元素绑定鼠标移入事件
            that.on(that.lis[i],'mouseenter',function(){
                //  获取自定义属性
                var index=this.index;
                //  排出所以的img的show类
                for(var i=0;i<that.imgs.length;i++){
                    that.imgs[i].className='';
                }
                //  为目标图片设置show类
                that.imgs[index].className='show';
                //  从新定义浮层位置
                that.layer.style.left=-22+60*index+'px';
            });
        }
    },
    //  事件绑定方法
    on:function(ele,type,fn){
        ele.addEventListener?ele.addEventListener(type,fn,false): ele.attachEvent('on'+type,fn);
        return this;
    }
}
