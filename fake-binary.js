// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  let result = '';
  
  for (let i = 0; i < x.length; i++) {
    const digit = parseInt(x[i]);
    
    if (digit < 5) {
      result += '0';
    } else {
      result += '1';
    }
  }
  
  return result;
}