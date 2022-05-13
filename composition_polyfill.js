function add(a) {
    return a+5;
}

function subraction(a) {
    return a-2;
}
function multiply(a) {
    return a*5;
}

const compose = (...functions) => {
    return (args) => {
        return functions.reduceRight((arg, fn) => fn(arg), args); // if we use pipe, you should use reduce instead of reduceRightmethod
    }
}
const evaluate = compose(add, subraction, multiply) // if we use pipe instead of compose it will eavaluates from left to right(compose => right to left)

console.log(evaluate(5));