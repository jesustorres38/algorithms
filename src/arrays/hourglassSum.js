const hourglassSum = (arr) => {

  let maxHourglassSum = -63;

  for(let i=0; i<arr.length-2; i++){
    for(let j=0; j<arr[i].length-2; j++){
      let currentHourglass = 
      arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + 
              arr[i + 1][j + 1] + 
      arr[i + 2][j] + arr[i+2][j+1] + arr[i+2][j+2]
      
      maxHourglassSum = currentHourglass > maxHourglassSum ? currentHourglass : maxHourglassSum

    }
  }

  return maxHourglassSum

}

module.exports = hourglassSum