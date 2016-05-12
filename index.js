module.exports = function (array) {
  return array.filter(function (item, position) {
    return array.indexOf(item) === position
  })
}
