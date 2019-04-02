var Basketball=function () {
    this.intro="篮球盛行于美国";
}
Basketball.prototype={
    getMember:function () {
        console.log("每个队伍需要5个成员");
    },
    getBallSize:function () {
        console.log("篮球很大");
    }
}

var Football=function () {
    this.intro="足球盛行于美国";
}
Football.prototype={
    getMember:function () {
        console.log("每个队伍需要11个成员");
    },
    getBallSize:function () {
        console.log("足球很大");
    }
}

var SportsFactory=function (name) {
    switch (name) {
        case 'Basketball':
            return new Basketball();
            break;
        case 'Football':
            return new Football();
            break;
        
        default:
            return null;
            break;
    }
}