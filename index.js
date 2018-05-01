module.exports = function(array) {
  if (typeof Set !== 'undefined') {
    return Array.from(new Set(array))
  }

  return array.filter(function(item, position, self) {
    return self.indexOf(item) === position
  })
}
