const palindromes = function (word) {
  // define valid alphabetical and numerical characters
  const alphanumercial = 'abcdefghijklmnopqrstuvwxyz0123456789'

  // generate a clean string that will be a consecutive sequence of only
  // alphanumerical characters
  const cleanString = word
    .toLowerCase()
    .split('')
    .filter((character) => alphanumercial.includes(character))
    .join('')

  // create a reversed string
  const reversedString = cleanString.split('').reverse().join('')

  // check whether they are equal
  return cleanString === reversedString
}

// Do not edit below this line
module.exports = palindromes
