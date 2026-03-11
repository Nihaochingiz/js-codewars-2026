// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str){
  if (str.length < 2) {
    return '';
  }
  
  return str.slice(1, str.length - 1);
};


console.log(removeChar('eloquent'))


