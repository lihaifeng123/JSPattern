//  模块实现
var viewCommand=(function(){
    var tpl={
        //  展示图片结构模板
        product:[
            '<div>',
                '<img src="{#src#}" />',
                '<p>{#text#}</p>',
            '</div>'
        ].join(''),
        //  展示标题结构模板
        title:[
            '<div class="title">',
                '<div class="main">',
                    '<h2>{#title#}</h2>',
                    '<p>{#tips#}</p>',
                '</div>',
            '</div>'
        ].join(''),

    }
    //  格式化字符串
    html='';
    
    function formatString(str,obj){
        //  替换'{#'与'#}'之间的字符串
        return str.replace(/\{#(\w+)#\}/g,function(match,key){
            return obj[key];
        });
    }
    //  方法集合
    var Action={
        create:function(data,view){
            //  解析数据
            if(data.length){
                for(var i=0,len=data.length;i<len;i++){
                    html+=formatString(tpl[view],data[i]);
                }
            }else{
                html+=formatString(tpl[view],data)
            }
        },
        display:function(container,data,view){
            //  如果传入数据
            if(data){
                //  根据给定数据创建视图
                this.create(data,view);
            }
            //  展示模块
            document.getElementById(container).innerHTML=html;
            html='';
        },
    }
    return function excute(msg){
        //  解析命令
        msg.param=Object.prototype.toString.call(msg.param)==="[object Array]"?msg.param:[msg.param];
        //  Action内部调用的方法
        Action[msg.command].apply(Action,msg.param);
    }
})();

//  产品展示数据
var productData=[
    {
        src:'command/02.jpg',
        text:'test1',
    },{
        src:'command/03.jpg',
        text:'test2',
    },{
        src:'command/04.jpg',
        text:'test3',
    }
];
//  模块标题数据
titleData={
    title:'title1',
    tips:'tips t1',

};

viewCommand({
    command:'display',
    param:['title',titleData,'title'],
});

viewCommand({
    command:'create',
    param:[{
        src:'command/01.jpg',
        text:'test6',
    },'product']
});

viewCommand({
    command:'display',
    param:['product',productData,'product']
});