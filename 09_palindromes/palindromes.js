const palindromes = function (str) {
    reg = /[^a-z0-9]/g;
    lowregStr = str.toLowerCase().replace(reg,'');
    reverseStr = lowregStr.split('').reverse().join('');
    return reverseStr == lowregStr;
};

// Do not edit below this line
module.exports = palindromes;
