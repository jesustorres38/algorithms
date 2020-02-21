const rotLeft = (a, d) => {
  
  let result = a

  for (let i=0; i<d; i++) {
    result.push(result.shift())
  }

  return result
}

module.exports = rotLeft