const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if(num < 0 ) return 'OOPS';
    for(let i = 1;i < num; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
/*
function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
*/