// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
  const quarters = {
    1: 1, 
    2: 1, 
    3: 1, 
    4: 2, 
    5: 2, 
    6: 2, 
    7: 3, 
    8: 3, 
    9: 3, 
    10: 4, 
    11: 4, 
    12: 4, 
  };

  return quarters[month];
};