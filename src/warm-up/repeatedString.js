const repeatedString = (s, n) =>{

  let reps = Math.floor(n / s.length)
  let mod = n % s.length
  let remainder = s.slice(0, mod)

  let countA = s.split('a').length - 1
  let countRemainder = remainder.split('a').length - 1

  return reps * countA + countRemainder
} 

module.exports = repeatedString