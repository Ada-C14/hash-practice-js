// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity:  O(n*klog(k)) 
// Space Complexity: O(n)??
function grouped_anagrams(strings) {
  let obj = {};
  let anagrams = [];

  for (let string of strings) {
      let letters = string.split("").sort().join("");
      // create hash key/value pair if it does not exist
      obj[letters] = obj[letters] || [];
      obj[letters].push(string);
    }

    for (let key in obj){
         anagrams.push(obj[key]);
     }
     return Object.values(obj);
}


// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)2
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  let obj = {};
  let mostCommon = [];

  if (list.length <= 0) return [];

  list.forEach(int => {
    obj[int] = obj[int] ? obj[int] +1 : 1;
  });

  const sortedArray = Object.entries(obj).sort((a,b) => b[1] - a[1])

  for(let i = 0; i < k; i++) {
    mostCommon.push(parseInt(sortedArray[i]));
  }

  return mostCommon;
}

// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
