module.exports = function getZerosCount(number, base) {
  // your implementation
    var answer = number;
    var a = getSimpleMultipliers(base);
    var count = new Array();
    for (i = 0; i < a.length; i++) {
        count[i] = 0;
    }
    for (i = 2; i <= number; i++) {
        var b = new Array();
        b = getSimpleMultipliers(i);
        for (j = 0; j < b.length; j++) {
                for (k = 0; k < a.length; k++) {
                    if (b[j] == a[k]) {
                        count[k]++;
                        break;
                    }
                } 
        }
    }
    for (l = 0; l < count.length; l++) {
        answer = Math.min(answer,count[l]);
    }
    print(count);
    return answer;
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