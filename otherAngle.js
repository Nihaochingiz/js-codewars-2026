// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

function otherAngle(a, b) {
  if (a <= 0 || b <=0) {
    return null;
  }
  let otherSide = 180 - (a + b);
  return otherSide
}