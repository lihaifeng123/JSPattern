var Conf=(function () {
    var conf={
        MAX_NUM:100,
        MIN_NUM:1,
        COUNT:1000,
    }

    return {
        get:function (name) {
            return conf[name]?conf[name]:null;
        }
    }
})();

var count=Conf.get('COUNT');
console.log(count);