const removeFromArray = function (array, ...val) {
  let new_array = []

  array.forEach((item) => {
    if (!val.includes(item)) new_array.push(item)
  })

  return new_array
}

// Do not edit below this line
module.exports = removeFromArray
