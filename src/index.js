
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  (matrix || arr).forEach((el, i) => (i % 2 === 0) ? (arr.push(...el)) : arr.push(...el.reverse()));
  return arr;
}