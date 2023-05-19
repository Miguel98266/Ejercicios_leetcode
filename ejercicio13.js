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
    M: 1000,
  };
  romanNumbersDec = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  number1 = "";
  number2 = "";
  numsdec = [];
  sumdec = 0;
  sum = 0;
  let romanNumber = [];
  for (let i = 0; i < s.length - 1; i++) {
    number1 = s[i];
    number2 = s[i + 1];
    concat = number1 + number2;
    // console.log(concat)
    // console.log(roman[i]," , ",roman[i+1])
    // console.log(romanNumbersDec[concat])
    // console.log(romanNumbersDec[concat]!==undefined)
    if (romanNumbersDec[concat] !== undefined) {
      numsdec.push(i);
      numsdec.push(i + 1);
      sumdec += romanNumbersDec[concat];
    }
  }
  console.log(sumdec);

  for (let i = 0; i < s.length; i++) {
    romanNumber.push(i);
  }
  // console.log(romanNumber)
  res = romanNumber.filter((item) => !numsdec.includes(item));
  console.log(res);

  for (const obj of res) {
    console.log(s[obj]);
    sum += romanNumbers[s[obj]];
  }
  console.log(sum);
  return sum + sumdec;
};
console.log(romanToInt("MCMXII"));
