// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
  let count = 0;
  
  for (let k = 0; k <= n; k++) {
    const squared = (k * k).toString();
    
    for (let i = 0; i < squared.length; i++) {
      if (parseInt(squared[i]) === d) {
        count++;
      }
    }
  }
  
  return count;
}