import Observer from './observer_1';

//  学生
var Student=function(result){
    var that=this;

    that.result=result;
    that.say=function(){
        console.log(that.result);
    }
};
//  回答问题方法
Student.prototype.answer=function(question){
    //  注册参数问题
    Observer.regist(question,this.say);
}

//  睡眠方法
Student.prototype.sleep=function(question){
    Observer.remove(question,this.say);
}

//  教师类
var Teacher=function(){};

//  教师提问
Teacher.prototype.ask=function(question){
    Observer.fire(question);
}

var student1=new Student('消息1'),
    student2=new Student('消息2'),
    student3=new Student('消息3');

    student1.answer('w1');
    student2.answer('w2');
    student3.answer('w3');

var teacher=new Teacher();

    teacher.ask('w1');
    teacher.ask('w2');