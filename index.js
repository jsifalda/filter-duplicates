module.exports = function (array) {
  var result = array
  if (typeof Set !== 'undefined') {
    result = Array.from(new Set(array))
  } else {
    result = array.filter(function (item, position, self) {
      return self.indexOf(item) === position
    })
  }

  return result
}
