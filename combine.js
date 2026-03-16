// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

function combine() {
  const result = {};
  
  for (let i = 0; i < arguments.length; i++) {
    const currentObj = arguments[i];
    
    for (let key in currentObj) {
      if (result.hasOwnProperty(key)) {
        result[key] += currentObj[key];
      } else {
        result[key] = currentObj[key];
      }
    }
  }
  
  return result;
}