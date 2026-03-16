// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript
function colourAssociation(array) {
  return array.map(item => {
    let obj = {};
    obj[item[0]] = item[1];
    return obj;
  });
}