const _ = require('lodash')

const numbers = [22, 33, 54, 67, 12, 23, 45, 67, 1, 9, 65]

_.each(numbers, (element) => {
  console.log(element)
})

numbers.forEach((element) => {
  console.log(element)
})

