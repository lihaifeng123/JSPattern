//  迭代器
var Iterator=function(items,container){
    //  获取父容器，若container参数存在，并且可以获取该元素，否则获取document
    var container=container&&document.getElementById(container)||document,
        //  获取元素
        items=container.getElementsByTagName(items);
        //  获取元素长度
        length=items.length,
        //  当前索引
        index=0;
    //  缓存原生splice函数
    var splice=[].splice;
    return {
        //  获取第一个元素
        first:function(){
            index=0;
            return items[index];
        },
        //  获取最后一个
        last:function(){
            index=items.length-1;
            return item[index];
        },
        //  获取前一个
        pre:function(){
            if(--index>0){
                return items[index];
            }else{
                index=0;
                return items[index];
            }
        },
        //  获取下一个
        next:function(){
            if(++index<items.length){
                return items[index];
            }else{
                index=items.length-1;
                return items[index];
            }
        },
        //  获取当前对象
        get:function(num){
            index=num>=0?num%items.length:num%length+length;
            return items[index];
        },
        //  对于所有的元素执行某个操作
        dealEach:function(fn){
            var args=splice.call(arguments,1);
            for(var i=0;i<length;i++){
                fn.apply(items[i],args);
            }
        },
        //  对于某个元素执行操作
        dealItem:function(num,fn){
            fn.apply(this.get(num),splice.call(arguments,2));
        },
        //  排他方式处理某个元素
        exclusive:function(num,allFn,numFn){
            //  对所有元素执行回调函数
            this.dealEach(allFn);
            //  如果num类型为数组
            if(Object.prototype.toString.call(num)==="[object Array]"){
                for(var i=0,len=num.length;i<len;i++){
                    this.dealItem(num[i],numFn);
                }
            }else{
                this.dealItem(num,numFn);
            }
        }
    }
}

var demo=new Iterator('li','container');
console.log(demo.first());

demo.dealEach(function(text,color){
    this.innerHTML=text;
    this.style.background='green';
},'test','pink');