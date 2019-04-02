//	装饰者
var decorator=function (input,fn) {
	//	获取事件源
	var input=document.getElementById(input);
	//	判断事件源是否已经绑定事件
	if(typeof input.onclick==='function'){
		//	缓存事件源原有回调函数
		var oldClick=input.onclick;
		//	为事件源定义新的事件
		input.onclick=function(){
			oldClick();
			fn();
		}
	}else{
		input.onclick=fn;
	}
}
decorator('tel_input',function(){
	document.getElementById('tel_demo_text').style.display='none';
});