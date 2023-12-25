const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let total = 0;
  array.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(...arg) {
  let product = 1;
  // for(i = 0; i < arg.length; i++){
  //   product *= arg[i];
  // }
  // return product;
  arg.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(n) {
	let answer = 1;
  if(n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(let i = n; i >= 1; i--){
      answer = answer*i;
    }
    return answer;
  }
  else{
    return 'number has to be positive';
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
