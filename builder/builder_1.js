/**
 * 建造者模式，关心的是构建的细节和创建对象的整个过程。
 * （模块化）
 */

/**
 * 创建人类
 * @param {*} params 
 */
var Human=function (params) {
    this.skill=params&&params.skill||'保密';
    this.hobby=params&&params.hobby||'保密';
}
//  人类的原型
Human.prototype={
    getSkill:function () {
        return this.skill;
    },
    getHobby:function () {
        return this.hobby;
    }
}

/**
 * 创建姓名类
 * @param {*} name 
 */
var Named=function (name) {
    var that=this;
    //  构造器
    (function (name,that) {
        this.wholename=name;
        if(name.indexOf('')>-1){
            that.FirstName=name.slice(0,name.indexOf(' '));
            that.SecondName=name.slice(name.indexOf(' '));
        }
    })(name,that);
}

/**
 * 创建职位类
 * @param {*} work 
 */
var Work=function (work) {
    var that=this;
    //  构造器
    (function (work,that) {
        switch (work) {
            case 'code':
                that.work='工程师';
                that.workDescript='喜欢编程';
                break;
            case 'UI':
                that.work='前端工程师';
                that.workDescript='喜欢绘图';
                break;
            case 'UE':
                that.work='设计师';
                that.workDescript='喜欢设计';
                break;
            case 'teach':
                that.work='教师';
                that.workDescript='喜欢小朋友';
                break;
            default:
                that.work=work;
                that.workDescript='对不起，目前还没有相关描述。';
                break;
        }
    })(work,that);
}
//  职位类的原型
Work.prototype={
    changeWork:function (work) {
        this.work=work;
    },
    changeDescript:function (setence) {
        this.workDescript=setence;
    }
}

/**
 * 应聘建造者
 * @param {*} name 
 * @param {*} work 
 */
var Person=function (name,work) {
    //  创建应聘者缓存
    var _person=new Human();
    _person.name=name;
    _person.work=new Work(work);
    //  返回应聘者
    return _person;
}

var person=new Person('xiao ming','code');