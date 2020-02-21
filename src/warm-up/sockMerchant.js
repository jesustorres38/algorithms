const sockMerchant = (ar, n) => {
  let arOrdered = ar.sort()
  let pairs = 0

  for(let i = 0; i < n; i++) {
    if(arOrdered[i] === arOrdered[i+1]) {
      pairs++
      i++
    }
  }
  
  return pairs
}

module.exports = sockMerchant