const { template } = require('@babel/core')
function calculateBMI(weight, height) {
  return weight/((height*height))
}
let BMI=calculateBMI()
function getBMIMeaning(weight, height) {
  if (BMI<18.5) {
    return ("Underweight")
  } else if (BMI<25) {
      return ("Normal Weight")
  } else (BMI>25) 
    return ("Overweight")      
  }
module.exports = getBMIMeaning
