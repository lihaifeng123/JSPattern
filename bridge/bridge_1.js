function changeColor(dom,color,bg){
	dom.style.color=color;
	dom.style.background=bg;
}

var spans=document.getElementByTagName('span');
spans[0].onmouseover=function(){
	changeColor(this,'red','#ddd');
}
/////////////////////////////////////////////////////////////////////////
function Speed(x,y){
	this.x=x;
	this.y=y;
}
Speed.prototype.run = function() {
	console.log('run...');
};
function Color(cl){
	this.color=cl;
}
Color.prototype.drawn=function(){
	console.log('drawn');
}

function Shape(shape){
	this.shape=shape;
}
Shape.prototype.change=function(){
	console.log('change');
}
function Speek(wd){
	this.word=wd;
}
Speek.prototype.say=function(){
	console.log('say');
}

function Ball(x,y,c){
	this.speed=new Speed(x,y);
	this.color=new Color(c);
}
Ball.prototype.init=function(){
	this.speed.run();
	this.color.drawn();
}