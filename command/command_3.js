var CanvasCommand=(function(){
    //  获取canvas
    var canvas=document.getElementById('canvas'),
        ctx=canvas.getContext('2d');
    var Action={
        //  填充色彩
        fillStyle:function(c){
            ctx.fillStyle=c;
        },
        //  填充矩形
        fillRect:function(x,y,width,height){
            ctx.fillRect(x,y,width,height);
        },
        //  描边色彩
        strokeStyle:function(c){
            ctx.strokeStyle=c;
        },
        //  描边矩形
        strokeRect:function(c){
            ctx.strokeRect(x,y,width,height);
        },
        //  填充字体
        fillText:function(text,x,y){
            ctx.fillText(text,x,y);
        },
        //  开启路径
        beginPath:function(){
            ctx.beginPath();
        },
        //  移动路径
        moveTo:function(x,y){
            ctx.moveTo(x,y);
        },
        //  画笔连线
        lineTo:function(x,y){
            ctx.lineTo(x,y);
        },
        //  绘制弧线
        arc:function(x,y,r,begin,end,dir){
            ctx.arc(x,y,r,begin,end,dir);
        },
        //  填充
        fill:function(){
            ctx.fill();
        },
        //  描边
        stroke:function(){
            ctx.stroke();
        }
    }
    return {
        //  命令接口
        execute:function(msg){
            if(!msg){
                return;
            }
            if(msg.length){
                for(var i=0,len=msg.length;i<len;i++){
                    arguments.callee(msg[i]);
                }
            }else{
                msg.param=Object.prototype.toString.call(msg.param)==="[object Array]"?msg.param:[msg.param];
                Action[sg.command].apply(Action,msg.param);
            }
        }
    }
});

CanvasCommand.execute([
    {command:'fillStyle',param:'red'},
    {command:'fillRect',param:[20,20,100,100]},
]);