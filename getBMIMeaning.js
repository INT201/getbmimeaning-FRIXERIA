//const { template } = require('@babel/core')
function calculateBMI(weight, height) {
  return weight/((height*height))
}

function getBMIMeaning(weight, height) {
let BMI=calculateBMI()
  switch (BMI) {
    case BMI<18.5:
      BMI ="Underweight";
      break;
    case BMI<25:
      BMI = "Normal weight";
      break;
    case BMI>25:
      BMI = "Overweight";
      break;
  }
  // if (BMI<18.5) {
  //   return ("Underweight")
  // } else if (BMI<25) {
  //     return ("Normal Weight")
  // } else (BMI>25) 
  //   return ("Overweight")   
  }
       
  
console.log(getBMIMeaning(65, 1.8))
console.log(calculateBMI(65, 1.8))
//module.exports = getBMIMeaning
