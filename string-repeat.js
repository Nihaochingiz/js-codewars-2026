// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
 let newStr = '';

  for (i = 0; i < n; i++) {
    newStr += s;
  }
  return newStr;
}


console.log(repeatStr(6, "I"));