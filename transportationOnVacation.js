// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(d) {
  const amountPerDay = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;
  let dailyAmount =  d * amountPerDay;

  if (d >= 7) {
    dailyAmount = dailyAmount - discountSevenDays;
  } else if (d >= 3) {
    dailyAmount = dailyAmount - discountThreeDays;
  }

  return dailyAmount;

}
