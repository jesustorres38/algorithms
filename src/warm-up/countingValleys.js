const countingValleys = (n, s) => {

  let path = s.split('')
  let count = 0
  let valleyCount = 0
  let isInValley = false
 
  for (let i = 0; i < n; i++) {

    if (path[i] === 'D') {
      count--
    } else {
      count++
    }

    if (count < 0 && !isInValley) {
      //valley starts
      isInValley = true;
    } else if (count == 0 && isInValley) {
      valleyCount++;
      isInValley = false;
    }
  }

  return valleyCount;
}

module.exports = countingValleys