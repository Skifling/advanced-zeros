module.exports = function getZerosCount(number, base) {
  // your implementation
  for (var i = 2; i < base; i++) {
	  if (base%i == 0) {
	  	base /= i;
      }
  }
  var res = 0;
  while(number > 0) {
  number = Math.floor(number/base);
  res += number;
  }
return res;
}

function getSimpleMultipliers(number){
    var j = 1;
    var i = 2;
    var a = new Array();
    do
    {
     if ((number % i) == 0)
     {
      a[j-1] = i;
      j++;
      number = number / i;
     }
     else
     {
      i++;
     }
    } while (i < number);
    a[j-1] = i;
    return a;
} 