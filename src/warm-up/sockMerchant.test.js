const sockMerchant = require('./sockMerchant')

test('Sock Merchant', () => {

  const colorsOfSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
  const numberOfSocks = colorsOfSocks.length

  expect(sockMerchant(colorsOfSocks, numberOfSocks)).toBe(3)
})