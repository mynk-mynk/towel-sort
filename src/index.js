
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const arr = [];

  if (Array.isArray(matrix) === true) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let secInd = i % 2 === 0 ? j : matrix[i].length - j - 1;
      arr.push(matrix[i][secInd]);
    }
  }
}
  return arr;
}


//module.exports = function towelSort (matrix) {
  //let arr = [];
  //(matrix || arr).forEach((el, i) => (i % 2 === 0) ? (arr.push(...el)) : arr.push(...el.reverse()));
 // return arr;
//}
