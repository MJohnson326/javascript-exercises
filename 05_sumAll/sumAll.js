const sumAll = function (min, max) {

       if (min<0 || max<0){return 'ERROR'}//return error for negative values
       if ((!Number.isInteger(min)) || (!Number.isInteger(max))){return 'ERROR'}//return error for non-number parameter
              let result = 0 // variable to fit sum

              if (min < max) {//lower number listed first
                     for (let i = min; i < max + 1; i++) {//iterates to lower number
                            result += i;

                     }
              }
              else if (min > max) {// higher number listed first
                     for (let j = max; j < min + 1; j++)//iterates lower number when min is larger
                            result += j
              }

              return result 
      


              
}

// Do not edit below this line
module.exports = sumAll;
