const { template } = require('@babel/core')
let bmi
if (bmi<18.5) {
  return ("Underweight")
} else if (bmi<25) {
    return ("Normal Weight")
} else (bmi>25) 
  return ("Overweight") 
function calculateBMI(weight, height) {
  return weight/((height*height))
}
function getBMIMeaning(weight, height) {
  return calculateBMI
}
module.exports = getBMIMeaning
