// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  if (strings.length === 0) {
    return []
  }
  let groups_obj = {}
  let final_arr = []
  for (const string of strings) {
    if (groups_obj[string.split('').sort().join('')]) {
      groups_obj[string.split('').sort().join('')].push(string);
    } else {
      groups_obj[string.split('').sort().join('')] = [string];
    }
  }
  for (const [ordered_string, arr] of Object.entries(groups_obj)) {
    final_arr.push(arr);
  }
  return final_arr;
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
