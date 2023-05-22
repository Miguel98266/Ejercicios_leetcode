/**  https://leetcode.com/problems/longest-common-prefix/description/
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
    console.log(strs.sort())
    for (let i = 0; i < strs[0].length; i++) {
        console.log(strs[0][i] !== strs[strs.length - 1][i])
        console.log(strs[0][i])
        console.log(strs[strs.length - 1][i])
        console.log(strs[0].slice(0, i))
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].slice(0, i);
    }
    return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]))


// Entender que es un Prefijo 
// Partícula o afijo, consistente en una o más letras, que se agregan al comienzo de una palabra 

// Pasos
// 1.- Ordenar los array
// 2.- Recorrer el primer array con un for
// 3.- Ir comparando las letras de item y del item siguiente hasta el punto donde ya no sean las mismas devolver ese cacho con un (slice)




