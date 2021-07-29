// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ? O(n*m) Based on length of strings array and length of each string in array
// Space Complexity: ? O(n) 
function grouped_anagrams(strings) {
  if (strings.length === 0) {
    return []
  }
  let groups_obj = {}
  for (const string of strings) {
    if (groups_obj[string.split('').sort().join('')]) {
      groups_obj[string.split('').sort().join('')].push(string);
    } else {
      groups_obj[string.split('').sort().join('')] = [string];
    }
  }
  return Object.values(groups_obj)
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ? O(nlogn) for sorting
// Space Complexity: ? O(n)
function top_k_frequent_elements(list, k) {
  if (list.length === 0) {
    return []
  }
  let counter_obj = {}
  let return_arr = []

  for (const num of list) {
    if (counter_obj[num]) {
      counter_obj[num] += 1
    } else {
      counter_obj[num] = 1
    }
  }
  const keys = Object.keys(counter_obj).sort((a, b) => counter_obj[b] - counter_obj[a]);
  for (i = 0; i < k; i++) {
    return_arr.push(parseInt(keys[i]));
  }
  return return_arr;
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
