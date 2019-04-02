/**
 *obj.name:name
 *obj.title:title
 *obj.age:age
 *obj.color:color
 *obj.size:size
 *obj.prize:prize
 *
 * @param {*} params
 */
function doSomething(params) {
    
}
/////////////////////////////////////////////////////////////////////
function doSometing(params) {
    var _adapter={
        name:'name',
        title:'title',
        age:24,
        color:'pink',
        size:100,
        prize:50
    };
    for(var i in _adapter){
        _adapter[i]=params[i]||_adapter[i];
    }
    //  do thing
}

var arr=['JavaScript','book','前端编程','8月1日'];
var obj={
    name:'',
    type:'',
    title:'',
    time:''
}
function arrayToObjectAdapter(arr){
    return{
        name:arr[0],
        type:arr[1],
        title:arr[2],
        data:arr[3],
    }
}

var adapterData=arrayToObjectAdapter(arr);
console.log(adapterData);