const hourglassSum = require('./hourglassSum')

test('hourglass Sum in 2d array', () => {
  
  const hourglassSample = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ]

  expect(hourglassSum(hourglassSample)).toBe(19)
})