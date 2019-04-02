//  模板类  基层提示框data渲染数据
var Alert=function (data) {
    //  没有数据返回，防止后面程序执行
    if(!data)
        return;
    //  设置内容
    this.content=data.content;
    //  创建提示框
    this.panel=document.createElement('div');
    //  创建提示内容
    this.contentNode=document.createElement('p');
    //  创建确定按钮组件
    this.confirmBtn=document.createElement('span');
    //  创建关闭按钮组件
    this.closeBtn=document.createElement('b');
    //  为提示框模板添加类
    this.panel.className='alert';
    //  我关闭按钮添加类
    this.closeBtn.className='a-close';
    //  为确定按钮添加类
    this.confirmBtn.className='a-confirm';
    //  为确定按钮添加文案
    this.confirmBtn.innerHTML=data.confirm||'确定';
    //  为提示内容添加文案
    this.contentNode.innerHTML=this.content;
    //  点击确定按钮执行方法，如果data中有success方法为success方法否则为空函数
    this.success=data.success||function(){};
    //  点击关闭按钮
    this.fail=data.fail||function () { }
}
//  提示框原型方法
Alert.prototype={
    //  创建方法
    init:function () {
        //  提示框
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);
        //  插入页面中
        document.body.appendChild(this.panel);
        //  绑定事件
        this.bindEvent();
        //  显示提示框
        this.show();
    },
    bindEvent:function () {
        var self=this;
        //  关闭按钮点击事件
        this.closeBtn.onclick=function () {
            //  执行关闭取消方法
            self.fail();
            //  隐藏弹层
            self.hide();
        }
        this.confirmBtn.onclick=function () {
            //  执行关闭确认方法
            self.success();
            //  隐藏弹层
            self.hide();
        }
    },
    hide:function(){
        this.panel.style.display='none';
    },
    show:function(){
        this.panel.style.display='block';
    }
}
//  右按钮提示框
var RightAlert=function(data){
    //  继承基本提示框
    Alert.call(this,data);
    //  为确认按钮添加right类设置位置右
    this.confirmBtn.className=this.confirmBtn.className+' right';
}
//  继承基本提示框
RightAlert.prototype=new Alert();

//  标题按钮提示框
var TitleAlert=function(data){
    //  继承基本提示框
    Alert.call(this,data);
    //  设置标题内容
    this.title=data.title;
    //  创建标题组件
    this.titleNode=document.createElement('h3');
    //  标题组件写入标题内容
    this.titleNode.innerHTML=this.title;
}
//  继承基本提示框
TitleAlert.prototype=new Alert();
TitleAlert.prototype.init=function(){
    //  插入标题
    this.panel.inertBefore(this.titleNode,this.panel.firstChild);
    //  继承基本提示框init方法
    Alert.prototype.init.call(this);
}


// 带有取消按钮提示框
var CancelAlert=function(data){
    //  继承基本提示框
    Alert.call(this,data);
    //  设置标题内容
    this.cancel=data.cancel;
    //  创建标题组件
    this.cancelBtn=document.createElement('span');
    //  为取消按钮添加类
    this.cancelBtn.className='cancel';
    //  标题组件写入标题内容
    this.cancelBtn.innerHTML=this.cancel;
}
//  继承基本提示框
CancelAlert.prototype=new Alert();
CancelAlert.prototype.init=function(){
    //  继承标题提示框创建方法
    TitleAlert.prototype.init.call(this);
    //  由于取消按钮要添加在末尾，所以在创建其他组件添加
    this.panel.appendChild(this.cancelBtn);
}
CancelAlert.prototype.bindEvent=function () {
    var self=this;
    //  标题提示框绑定事件方法继承
    TitleAlert.prototype.bindEvent.call(self);
    //  取消按钮绑定事件
    this.cancelBtn.onclick=function(){
        //  执行取消回调函数
        self.fail();
        //  隐藏弹层
        self.hide();
    }
}

new CancelAlert({
    title:'提示标题',
    content:'提示内容',
    success:function(){
        console.log('ok');
    },
    fail:function(){
        console.log('cancel');
    }
}).init();