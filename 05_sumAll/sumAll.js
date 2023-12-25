const sumAll = function(num1, num2) {
    var total =0;
    if(num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    for(i = num1; i <= num2; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
