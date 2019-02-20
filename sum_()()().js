function sum(a) {
    return function(b) {
        if (typeof b !== 'undefined') {
            a = a + b;
            return arguments.callee;
        } else {
            return a;
        }
    };
}
console.log(sum(1)(2)(3)());
console.log(sum(1)(1)(2)(1)(2)(5)());