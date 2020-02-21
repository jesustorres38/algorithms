const repeatedString = require('./repeatedString')

test('Repeated String', () => {

  const infiniteString = 'aba'
  const repetitionString = 10
  
  expect(repeatedString(infiniteString, repetitionString)).toBe(7)
})