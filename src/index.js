
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  if (matrix[0] === undefined)
    return [];
  
  matrix = matrix.map((el, ind) => (ind % 2) ? el.reverse() : el);
  
  return matrix.toString().split(',').map(e => +e);
}