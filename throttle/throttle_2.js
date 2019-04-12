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

/**
 * 节流延迟加载图片
 * @param {*} id 
 */
function LazyLoad(id){
    //  获取需要加载的图片容器
    this.container=document.getElementById(id);
    //  缓存图片
    this.imgs=this.getImgs();
    //  执行逻辑
    this.init();
}
//  节流延迟加载图片方法
LazyLoad.prototype={
    //  启始逻辑
    init:function(){
        this.update();
        this.bindEvent();
    },
    //  获取延迟加载图片
    getImgs:function(){
        //  新数组容器
        var arr=[];
        //  获取图片
        var imgs=this.container.getImgs();

        //  把获取的图片转到数组
        for(var i=0,len=imgs.length;i<len;i++){
            arr.push(imgs[i]);
        }
        return arr;
    },
    //  加载图片
    update:function(){
        //  如果图片都加载完成，返回
        if(!this.imgs.length){
            return;
        }
        //  获取图片长度
        var i=this.imgs.length;
        //  遍历图片
        for(--i;i>=0;i--){
            //  如果图片在可视化范围内
            if(this.shouldShow(i)){
                //  加载图片
                this.imgs[i].src=this.imgs[i].getAttribute('data-src');
                //  清除缓存的图片
                this.imgs.splice(i,1);
            }
        }
    },
    //  判断图片是否在可视化区域内
    shouldShow:function(i){
        var img=this.img[i],
            //  可视范围内顶部高度
            scrollTop=document.documentElement.scrollTop||document.body.scrollTop,
            //  可视范围内底部
            scrollBottom=scrollTop+document.documentElement.clientHeight,
            //  图片的顶部位置
            imgTop=this.pageY(img),
            //  图片的底部位置
            imgBottom=imgTop+img.offsetHeight;
            //  判断图片是否在可视范围内
            if(imgBottom>scrollTop&&imgBottom<scrollBottom||(imgTop>scrollTop&&imgTop<scrollBottom)){
                return true;
            }
            return false;
    },
    //  获取元素页面的纵坐标
    pageY:function(element){
        //  如果元素有父元素
        if(element.offsetParent){
            //  返回元素+父元素高度
            return element.offsetTop+this.pageY(element.offsetParent);
        }else{
            return element.offsetTop;
        }
    },
    //  绑定事件
    on:function(element,type,fn){
        if(element.addEventListener){
            addEventListener(type,fn,false);
        }else{
            element.attachEvent('on'+type,fn,false);
        }
    },
    //  为窗口绑定resize和scroll
    bindEvent:function(){
        var that=this;
        this.on(window,'resize',function(){
            //  节流处理更新图片逻辑
            throttle(that.update,{context:that});
        });
        this.on(window,'scroll',function(){
            throttle(that.update,{context:that});
        })
    }
}

//  延迟加载图片
new LazyLoad('container');