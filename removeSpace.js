// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x){
    let newStr = x.split(' ').join('');
    return newStr;
}

console.log(noSpace(' text '));