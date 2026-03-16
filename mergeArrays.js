// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
   if (arr1.length === 0 && arr2.length === 0) {
        return [];
   }
   const result = [...arr1, ...arr2]; 
   const uniqueArray = [...new Set(result)]
   uniqueArray.sort((a, b) => a - b);
   return uniqueArray;
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));