const jumpingOnClouds = (c) => {
  let jumps = 0

  for(let i=0, length=c.length-1; i<length; i++) {
    if (c[i+2] === 0) {
      jumps++
      i++
    } else {
      jumps++
    }
  }

  return jumps

}

module.exports = jumpingOnClouds