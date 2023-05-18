/** https://leetcode.com/problems/generate-fibonacci-sequence/
 * @return {Generator<number>}
 */
// var fibGenerator = function* (number) {
//     const fibonacii = [];
//     for (let i = 0; i < number; i++) {
//       console.log(i);
//       if (i === 0) {
//         yield fibonacii.push(i);
//         console.log("pusheo")
//       }else if (i === 1) {
//         yield fibonacii.push(i);
//       }else if(i>=2){
//           console.log(fibonacii);
//           yield fibonacii[i - 1] + fibonacii[i - 2];
//           // fibonacii.push(fibonacii[i - 1] + fibonacii[i - 2]);
//       }
//       console.log(fibonacii)
//     }
//   };
// function fibonaci(n) {
//     if (n == 1) return 0;
//     if (n == 2) return 1;
//     let a=fibonaci(n - 1)
//     let b=fibonaci(n - 2)
//     return a + b;
//       //    3= 1 + 0
//       //    4= 3 + 2
//   }
var fibGenerator = function* () {
  let numeroUno = 0;
  let numeroDos = 1;
  yield numeroUno;
  yield numeroDos;
  while (true) {
    let numerotres = numeroUno + numeroDos;
    yield numerotres;
    numeroUno = numeroDos;
    numeroDos = numerotres;
  }
};

// var fibGenerator = function* () {
//     yield 4 - 1 + 4 - 2;
//   };
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0

// 0
/**
 *
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

console.log(fibonaci(1));
console.log(fibonaci(2));
console.log(fibonaci(3));
console.log(fibonaci(4));
console.log(fibonaci(5));
console.log(fibonaci(6));
