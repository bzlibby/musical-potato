function bmi(weight, height) {
  const bmiCalc = weight / Math.pow(height, 2);
  let bmiResult = "";
  if (bmiCalc <= 18.5) {
    bmiResult = "Underweight";
  } else if (18.5 < bmiCalc && bmiCalc <= 25.0) {
    bmiResult = "Normal";
  } else if (25.0 < bmiCalc && bmiCalc <= 30.0) {
    bmiResult = "Overweight";
  } else if (bmiCalc > 30.0) {
    bmiResult = "Obese";
  }
  console.log(`BMI: ${bmiCalc}; ${bmiResult}`);
}

bmi(50, 1.8);
bmi(80, 1.8);
bmi(90, 1.8);
bmi(110, 1.8);
