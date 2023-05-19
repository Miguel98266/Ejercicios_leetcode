/**Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    romanNumbersDec={
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900
    }
    roman = s.split('')
    number1=''
    number2=''
    numsdec=[]
    
    for (let i = 0; i < roman.length-1; i++) {
        number1=roman[i]
        number2=roman[i+1]
        concat=number1+number2
        // console.log(concat)
        console.log(roman[i]," , ",roman[i+1])
        // console.log(romanNumbersDec[concat])
        console.log(romanNumbersDec[concat]!==undefined)
        if (romanNumbersDec[concat]!==undefined) {
            numsdec.push(i)
            numsdec.push(i+1)
        }
        // if (concat==romanNumbers[roman[concat]]) {
        // }
    }
    sum = 0
    for (let i = 0; i < roman.length; i++) {
        sum += romanNumbers[roman[i]]
        // console.log(romanNumbers[roman[i]])

    }
    return numsdec
};
console.log(romanToInt("MCMXCIV"))