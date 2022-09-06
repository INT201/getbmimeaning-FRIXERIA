const { template } = require('@babel/core')
function calculateBMI(weight, height) {
  return weight/((height*height))
}

function getBMIMeaning(weight, height) {
  let BMI=calculateBMI(weight, height)
  if (BMI<=18.5) {
    return ("Underweight")
  } else if (BMI>=18.5 && BMI<=25.9) {
      return ("Normal Weight")
  } else  (BMI>25)
    return ("Overweight")   
  } 
 console.log(getBMIMeaning(40,1.85))
module.exports = getBMIMeaning
