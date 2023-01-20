const repeatString = function (hey, num) {
    let string= ''
        if (num < 0) 
        return 'ERROR';
    else 
    for( i=0; i<num; i++)
    string += hey
     return string;
}

repeatString()

// Do not edit below this line
module.exports = repeatString;
