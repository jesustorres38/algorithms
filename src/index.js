const sockMerchant = require('./warm-up/sockMerchant')
const countingValleys = require('./warm-up/countingValleys')
const jumpingOnClouds = require('./warm-up/jumpingOnClouds')
const repeatedString = require('./warm-up/repeatedString')
const rotLeft = require('./arrays/rotLeft')

const hourglassSum = require('./arrays/hourglassSum')

const colorsOfSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const numberOfSocks = colorsOfSocks.length

const path = 'DDUUDDUDUUUD'
const steps = path.length

const clouds = [0, 0, 1, 0, 0, 1, 0] 

const infiniteString = 'aba'
const repetitionString = 10

const hourglassSample = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

const rotLeftSample = 54
const rotLeftSampleArray = [1,2,3,4,5]

console.log(`sockMerchant: ${sockMerchant(colorsOfSocks, numberOfSocks)}`) //should be 3
console.log(`countingValleys: ${countingValleys(steps, path)}`) //should be 2
console.log(`jumpingOnClouds: ${jumpingOnClouds(clouds)}`) //should be 4
console.log(`repeatedString: ${repeatedString(infiniteString, repetitionString)}`) //should be 7
console.log(`hourglassSum: ${hourglassSum(hourglassSample)}`) //should be 19
console.log(`rotLeft: ${rotLeft(rotLeftSampleArray, rotLeftSample)}`) //should be [5,4,3,2,1]