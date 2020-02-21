const rotLeft = require('./rotLeft')

test('Rot String to Left', () => {
  
  const rotLeftSample = 2
  const rotLeftSampleArray = [1, 2, 3, 4, 5]

  expect(rotLeft(rotLeftSampleArray, rotLeftSample)).toStrictEqual([3, 4, 5, 1, 2])
})