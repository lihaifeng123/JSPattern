//  多态
function add() {
    var args=arguments.
        len=arguments.length;
    
    switch (len) {
        case 0:
            return 10;
            break;
        case 1:
            return 10+args[0];
            break;
        case 2:
            return args[0]+args[1];
            break;
        default:
            return 10
            break;
    }
}

console.log(add());
console.log(add(1));
console.log(add(1,3));