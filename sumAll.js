const sumAll = function(a, b) {
    if(isNaN(a) || isNaN(b)|| a == String || b== String) return 'ERROR';
    if(a < 0 || b < 0) return 'ERROR'
    let sum = 0
    for (let i = Math.min(a,b); i<= Math.max(a,b); i++) //can be shortened to: for(; min < max; min++)
        sum = sum + i
    return sum;
  };
  
module.exports = sumAll;
