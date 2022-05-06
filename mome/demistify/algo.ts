/*
Create a function called removeInvalidTriangles that

takes an array of triangles (triangles) as an input, (a triangle is represented by an array with 3 integers which are the length of its sides)
removes the invalid triangles from the array
returns an array / list with only the valid triangles
hint: A triangle is valid if sum of any of its two sides is greater than the third side:

a + b > c
b + c > a
a + c > b
Example cases:

removeInvalidTriangles([[1, 2, 3], [2, 3, 4], [4, 5, 6]]);
Should return [[2, 3, 4], [4, 5, 6]]

removeInvalidTriangles([[1, 10, 12], [5, 10, 7]);
Should return [[5, 10, 7]]

removeInvalidTriangles([]);
Should return []
*/

const removeInvalidTriangles = (arr: number[][]):number[][] => {

  let result:number[][] =[];

  result = arr.filter(triangle => {
    const a = triangle[0];
    const b = triangle[1];
    const c = triangle[2];
    
    return a + b > c && b + c > a && a + c > b;
  });
  
  return result;

} 

console.log(removeInvalidTriangles([[1, 2, 3], [2, 3, 4], [4, 5, 6]]));

console.log(removeInvalidTriangles([[1, 10, 12], [5, 10, 7]]));

console.log(removeInvalidTriangles([]));

