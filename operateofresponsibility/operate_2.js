var A=function (selector) {
    return A.fn.init(selector);
}
A.fn=A.prototype={
    init:function(selector){
        this[0]=document.getElementById(selector);
        this.length=1;
        return this;
    },
    length:0,
    size:function () {
        return this.length;
    }
}
/*
var A=function(selector){
    return new A.fn.init(selector);
}
*/
A.fn.init.prototype=A.fn;
/////////////////////////////////////////////////////////////////////

var A=function (selector) {
    return new A.fn.init(selector);
}
A.fn=A.prototype={
    //  强化构器
    constructor:A,
    init:function(selector){
        console.log(this.constructor);
        this[0]=document.getElementById(selector);
        this.length=1;
        return this;
    },
    length:0,
    size:function () {
        return this.length;
    }
}
A.fn.init.prototype=A.fn;

console.log(A('#id').size());

/////////////////////////////////////////////////////////////////////
var A=function (selector,context) {
    return new A.fn.init(selector,context);
}
A.fn=A.prototype={
    //  强化构器
    constructor:A,
    init:function(selector,context){
        //  获取元素长度
        this.length=0;
        //  默认获取元素的上下文是document
        context=context||document;

        //  如果是按照id选择符按位非将-1转化为0，转化为false
        if(~selector.indexof('#')){
            //  截取id并且选择
            this[0]=document.getElementById(selector.slice(1));
            this.length=1;
            //如果是元素名称
        }else{
            //  在上下文中选择元素
            var doms=context.getElementsByTagName(selector),
                i=0,
                len=doms.length;
                for(;i<len;i++){
                    //  压入this
                    this[i]=doms[i];
                }
                //  效正长度
                this.length=len;
        }
        //  保存上下文
        this.context=context;
        //  保存选择符
        this.selector=selector;

        return this;
    },
    length:0,
    size:function () {
        return this.length;
    },
    push:[].push,
    sort:[].sort,
    splice:[].splice,
}
A.fn.init.prototype=A.fn;
/** */
//  对象扩展
A.extend=A.fn.extend=function(){
    //  扩展对象从第二个参数算
    var i=1,
        len=arguments.length,
        target=arguments[0],
        j;
    //  如果只传一个参数
    if(i==len){
        //  源对象为当前对象
        target=this;
        //  i从0计数
        i--;
    }
    //  遍历参数中扩展对象
    for(;i<len;i++){
        //  遍历扩展对象中的属性
        for(j in arguments[i]){
            //  扩展源对象
            target[j]=arguments[i][j];
        }
    }
    //  返回源对象
    return target;
}
//  扩展一个对象
var demo=A.extend({first:1},{second:2},{third:3});
console.log(demo);
A.extend(A.fn,{version:'1.0'});
console.log(A('demo').version);

A.fn.extend({getVersion:function(){return this.version;}});

A.fn.extend({
    //  添加事件
    on:(function(){
        //  标准浏览器DOM2级事件
        if(document.addEventListener){
            return function (type,fn) {
                var i=this.length-1;
                //  遍历所有元素添加事件
                for(;i>=0;i--){
                    this[i].addEventListener(type,fn,false);
                }
                //  返回源对象
                return this;
            }
        //  IE浏览器DOM2级事件
        }else if(document.attachEvent){
            return function(type,fn){
                var i=this.length-1;
                for(;i>=0;i--){
                    this[i].addEvent('on'+type,fn);
                }
                return this;
            }
            //  不支持DOM2级事件浏览器添加事件

        }else{
            return function(type,fn){
                var i=this.length-1;
                for(;i>=0;i--){
                    this[i]['on'+type]=fn;
                }
                return this;
            }
        }
    })()
});

A.extend({
    //  把'-'分割转化为驼峰式，如'border-color'-->'bordercolor'
    camelcase:function(str){
        return str.replace(/\-(\w)/g,function(all,letter){
            return letter.toUppercase();
        });
    }
});

A.extend({
    //  设置css
    css:function(){
        var arg=arguments,
            len=arg.length;
        if(this.length<1){
            return this;
        }
        //  只有一个参数时
        if(len===1){
            //  如果为字符串则为获取第一个元素css样式
            if(typeof arg[0]==='string'){
                //  IE
                if(this[0].currentstyle){
                    return this[0].currentstyle[name];
                }else{
                    return getComputedStyle(this[0],false)[name];
                }
            }else if(typeof arg[0]==='object'){
                //  遍历每个样式
                for(var i in arg[0]){
                    for(var j=this.length-1;j>=0;j--){
                        //  调用扩展方法camelcase把'-'分割线到驼峰式
                        this[j].style[A.camelcase(i)]=arg[0][i];
                    }
                }
            }
            //  两个参数设置一个样式
        }else if(len===2){
            for(var j=this.length-1;j>=0;j--){
                this[j].style[A.camelcase(arg[0])]=arg[1];
            }
        }
        return this;
    }
});

A.fn.extend({
    //  设置属性
    attr:function(){
        var arg=arguments,
            len=arg.length;
        if(this.length<1){
            return this;
        }
        //  如果一个参数
        if(len===1){
            //  为字符串就获取第一个元素属性
            if(typeof arg[0]==='string'){
                return this[0].getAttribute(arg[0]);
                //  为对象设置每个元素的多个属性
            }else if(typeof arg[0]==='object'){
                //  遍历属性
                for(var i in arg[0]){
                    for(var j=this.length-1;j>=0;j--){
                        this[j].setAttribute(i,arg[0][i]);
                    }
                }
            }
        }else if(len===2){
            for(var j=this.length-1;j>=0;j--){
                this[j].setAttribute(arg[0],arg[1]);
            }
        }
        return this;
    }
});

A.fn.extend({
    //  获取或者设置元素的内容
    html:function(){
        var arg=arguments,
            len=arg.length;
        //  无参数就获取第一个元素的内容
        if(len===0){
            return this[0]&&this[0].innerHTML;
            //  一个参数就设置每个元素的内容
        }else{
            for(var i=this.length-1;i>=0;i--){
                this[i].innerHTML=arg[0];
            }
        }
        return this;
    }
});

A('div')
.css({
    height:'30px',
    border:'1px solid #000',
    'background-color':'red'
})
.attr('class','demo')
.html('add demo text')
.on('click',function(){
    console.log('clicked');
});
/////////////////////////////////////////////////////////