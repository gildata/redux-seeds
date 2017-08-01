/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export default function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(
        (a, b) => (...args) => a(b(...args))
    );
}

/* 

// function reduce js

// Array.prototype.reduce() & ...spread /...rest
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce



https://www.sitepoint.com/map-reduce-functional-javascript/


function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(
        (a, b) => (...args) => a(b(...args))
    );
}

function func1(){
    console.log(`a1`);
}
function func2(){
    console.log(`b2`);
}
function func3(){
    console.log(`c3`);
}
function func4(){
    console.log(`d4`);
}
function func5(){
    console.log(`e5`);
}

// object
const funcs = {
    func1,
    func2,
    func3,
    func4,
    func5
};
compose(...funcs);
// undefined is not a function


// array
const funcs = [
    func1,
    func2,
    func3,
    func4,
    func5
];

compose(...funcs);
// (...args) => a(b(...args))


*/


/* 

reduceRight ???

arr.reduceRight(callback[, initialValue]);


https://github.com/xgqfrms-GitHub/redux-simple-tutorial/blob/master/redux-advanced-tutorial.md#-源码分析


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight


https://stackoverflow.com/questions/20753527/when-to-use-reduce-and-reduceright

*/