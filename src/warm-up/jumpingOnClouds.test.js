const jumpingOnClouds = require('./jumpingOnClouds')

test('Jump on clouds', () => {

  const clouds = [0, 0, 1, 0, 0, 1, 0]

  expect(jumpingOnClouds(clouds)).toBe(4)
})