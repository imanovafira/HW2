function sumIfEven (a,b) {
    if (a%2==0) {
        return a*b
    } else return a+b
};

function getQuarter (x,y) {
    if (x>0 && y>0) {
        return "first quarter"
    } else if (x>0 && y<0) {
        return "second quarter"
    } else if (x<0 && y<0) {
        return "third quarter"
    } else if (x<0 && y>0) {
        return "forth quarter"
    }
};

function addPositives (a,b,c) {
    if (a>0 && b>0 && c>0) {
        return a+b+c
    } else if (a>0 && b>0 && c<0) {
        return a+b
    } else if (a>0 && b<0 && c>0) {
        return a+c
    } else if (a<0 && b>0 && c>0) {
        return b+c
    } else if (a<0 && b<0 && c<0) {
        return 0
 };

 function calculateMax (a,b,c) {
    if (a+b+c>a*b*c) {
        return a+b+c+3
    } else if (a*b*c>a+b+c) {
        return (a*b*c)+3
    }
 };

 function determineRating (valuation) {
     if ( 19>= valuation >=0)  {
         return "F"
     } else if ( 39>= valuation >=20) {
         return "E"
     } else if ( 59>= valuation >=40) {
         return "D"
     } else if ( 74>= valuation >=60) {
         return "C"
     } else if ( 89>= valuation >=75) {
         return "B"
     } else if ( 100>= valuation >=90) {
         return "A"
     }
 };

 var number = 0;
 while (number <= 99) {
     console.log (number);
     number= number + 2;
 };

 function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  };

  function getSquare (a) {
      return Math.sqrt (a);
  };

  function getFaktorial (n) {
      let result = 1;
      for (let i=2; i<=n; i++) {
          result = result * i;
        }
          return result
  };

  function sumDigits(number) {
    var str = number.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += parseInt(str.charAt(i), 10);
    } return sum;
  };

  var rez =prompt("Введите число"); {
    var spl =rez.split("");
    alert(spl.reverse().join(''));
    };

    function getMinOfArray(numArray) {
        return Math.max.apply(null, numArray);
      };

     function getMinOfArray(numArray) {
        return Math.max.apply(null, numArray);
      }; 

      function indexOfSmallest(a) {
        var lowest = 0;
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[lowest])
                lowest = i;
        }
        return lowest;
    };

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    };

function summ (max) {
    function rand (max) {
        return Math.round(Math.random() * (max));   
    }
    var mas = [],
        sum = 0;
    for (var i = 0; i < max; i++) {
        mas[i] = rand(max);
        ((i % 2) != 0) ? sum += mas[i] : '';
    }
    console.log('Массив чисел: ' + mas);
    console.log('Cумма нечетных чисел: ' + sum);
}
summ(10);

var arr = ['c', 'a', 'b', 'd'];
arr.reverse();
alert(arr);

const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

function getNameDay (dayNumber) {
    if (dayNumber == 1) {
        return " ponedelnik "
    } else if (dayNumber == 2) {
        return "vtornik"
    } else if (dayNumber == 3) {
        return " sreda "
    } else if  (dayNumber == 4) {
        return "cetverq"
    } else if (dayNumber == 5) {
        return "pyatnica"
    }else if (dayNumber == 6) {
        return "subbota"
    }else if (dayNumber == 7) {
        return "voskresenye"
    };
}
