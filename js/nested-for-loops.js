/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n"; // "NEW LINE"

  let arr = [];

  for(a=0; a<depth; a++){
    arr[a] = [];
    for(b=0; b<width; b++){
      arr[a][b] = '{x:' + b + ', y:' + a + '}';
      if(b<width && b>0){
        arr[a][b] = ' ' + arr[a][b];
      }
      arr.join(',');
      
    }
  };
  return result + arr.join(result) + result;

};

// To see your console output outside the tests add function calls here.
//console.log(nestedForLoops(4));
console.log(nestedForLoops(3));