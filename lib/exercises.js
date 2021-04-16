// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  let obj = {};

  if (strings.length === 0) return [];

  strings.forEach(string => {
    // split each word into letters and sort alphabetially
    let letters = string.split('').sort()

    // if the letters exists, add string to key
    // else add to obj
    obj[letters] ? obj[letters].push(string) : obj[letters] = [string]
    // create new array and add to results
  });
  // iterate through obj 
  // return results 

  const values = Object.values(obj)
  // console.log("VALUES", values)
  return values;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  throw new Error("Method hasn't been implemented yet!");
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
