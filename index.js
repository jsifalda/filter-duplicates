module.exports = function (array) {
  return array.filter(function (item, position, self) {
    return self.indexOf(item) === position
  })
}
