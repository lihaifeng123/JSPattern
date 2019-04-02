var News=function () {
	this.children=[];
	this.elememt=null;
}
News.prototype = {
	init:function(){
		throw new Error("Error");
	},
	add:function(){
		throw new Error("Error");
	},
	getElement:function(){
		throw new Error("Error");
	}
}
/**
 *  寄生式继承    继承原型
 *  传递参数 supClass
 *  传递参数 superClass 
 */
function inheritPrototype(subClass,superClass) {
    var p=inheritPrototype(superClass.prototype);
    p.constructor=subClass;
    subClass.prototype=p;
}
//////////////////////////////////////////////////////////////////////////////////////////
//	容器类构造函数
var Container=function(id,parent){
	//	构造函数继承父类
	News.call(this);
	//	模块id
	this.id=id;
	this.parent=parent;
	//构建方法
	this.init();
}

//	寄生式继承父类原型方法
inhertPrototype(Container,News);

//	构建方法
Container.prototype.init=function(){
	this.elememt=document.createElement('ul');
	this.elememt.id=this.id;
	this.elememt.className='new-container';
}

//	添加子方法
Container.prototype.add=function (child) {
	//	在子元素容器中插入子元素
	this.children.push(child);
	this.elememt.appendChild(child.getElement());
	return this;
}
//	获取当前元素方法
Container.prototype.getElement=function () {
	return this.elememt;
}
//	显示方法
Container.prototype.show=function(){
	this.parent.appendChild(this.elememt);
}
////////////////////////////////////////////////////////////////////////////////////////////////
var Item=function(classname){
	News.call(this);
	this.classname=classname||'';
	this.init();
}
//	寄生式继承父类原型方法
inhertPrototype(Item,News);

Item.prototype.init=function(){
	this.elememt=document.createElement('li');
	this.elememt.className=this.classname;
}

Item.prototype.add=function(child){
	this.children.push(child);
	this.elememt.appendChild(child.getElement());
	return this;
}

Item.prototype.getElement=function(){
	return this.elememt;
}
/////////////////////////////////////////////////////////////////////////////////////////
var NewsGroup=function (classname) {
	News.call(this);
	this.classname=classname||'';
	this.init();
}
//	寄生式继承父类原型方法
inhertPrototype(NewsGroup,News);

NewsGroup.prototype.init=function(){
	this.elememt=document.createElement('li');
	this.elememt.className=this.classname;
}

NewsGroup.prototype.add=function(child){
	this.children.push(child);
	this.elememt.appendChild(child.getElement());
	return this;
}

NewsGroup.prototype.getElement=function(){
	return this.elememt;
}
/////////////////////////////////////////////////////////////////////////////////////////////
var ImageNews=function (url,href,classname) {
	News.call(this);
	this.url=url||'';
	this.href=href||'';
	this.classname=classname||'';
	this.init();
}
//	寄生式继承父类原型方法
inhertPrototype(ImageNews,News);

ImageNews.prototype.init=function(){
	this.elememt=document.createElement('a');
	var image=new Image();
	image.src=this.url;
	this.elememt.appendChild(image);
	this.elememt.className='image-news '+this.classname;
	this.elememt.href=this.href;
}

ImageNews.prototype.add=function(child){
}

ImageNews.prototype.getElement=function(){
	return this.elememt;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var IconNews=function (text,href,type) {
	News.call(this);
	this.text=text||'';
	this.href=href||'#';
	this.type=type||'video';
	this.init();
}
inheritPrototype(IconNews,News);
IconNews.prototype.init=function(){
	this.elememt=document.createElement('a');
	this.elememt.innerHTML=this.text;
	this.elememt.href=this.href;
	this.elememt.className='icon '+this.type;
}
IconNews.prototype.add=function () {}
IconNews.prototype.getElement=function () {
	return this.elememt;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
var IconNews=function (text,href,type) {
	News.call(this);
	this.text=text||'';
	this.href=href||'#';
	this.type=type||'video';
	this.init();
}
inheritPrototype(IconNews,News);
IconNews.prototype.init=function(){
	this.elememt=document.createElement('a');
	this.elememt.innerHTML=this.text;
	this.elememt.href=this.href;
	this.elememt.className='icon '+this.type;
}
IconNews.prototype.add=function () {}
IconNews.prototype.getElement=function () {
	return this.elememt;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var EasyNews=function (text,href) {
	News.call(this);
	this.text=text||'';
	this.href=href||'#';
	this.init();
}
inheritPrototype(EasyNews,News);
EasyNews.prototype.init=function(){
	this.elememt=document.createElement('a');
	this.elememt.innerHTML=this.text;
	this.elememt.href=this.href;
	this.elememt.className=this.type;
}
EasyNews.prototype.add=function () {}
EasyNews.prototype.getElement=function () {
	return this.elememt;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var TypeNews=function (text,href,type,pos) {
	News.call(this);
	this.text=text||'';
	this.href=href||'#';
	this.type=type||'';
	this.pos=pos||'left';
	this.init();
}
inheritPrototype(TypeNews,News);
TypeNews.prototype.init=function(){
	this.elememt=document.createElement('a');
	if(this.pos==='left'){
		this.elememt.innerHTML='['+this.type+'] '+this.text;
	}else{
		this.elememt.innerHTML=this.text+' ['+this.type+']';
	}
	this.elememt.href=this.href;
	this.elememt.className='text';
}
TypeNews.prototype.add=function () {}
TypeNews.prototype.getElement=function () {
	return this.elememt;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var news1=new Container('news',document.body);
news1.add(
	new Item('normal').add(
		new IconNews('我的','#','video')
	)
).add(
	new Item('normal').add(
		new IconNews('保护','#','live')
	)
).add(
	new Item('normal').add(
		new NewsGroup('has-img').add(
			new ImageNews('img/1.jpg','#','small')
		).add(
			new EasyNews('240金','#')
		).add(
			new EasyNews('跑步机','#')
		)
	)
).add(
	new Item('normal').add(
		new TypeNews('AK47','#','NBA','left')
	)
).add(
	new Item('normal').add(
		new TypeNews('火炮','#','CBA','right')
	)
).show();