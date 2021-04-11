// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {

  let result = [];
  let result_index = 0;

  while (strings.length > 0) {
    let hash = {};
    let word = strings.pop();
    result.push([word])
    
    for (char in word) {
      if (hash[word[char]]) {
        hash[word[char]]++;
      } else {
        hash[word[char]] = 1
      }
    }
    
    let matched = [];
    for (let i = 0; i < strings.length; i++) {
      let letter_count = 0;
      let temp = strings[i];
      for (let j = 0; j < temp.length; j++) {
        if (hash[temp[j]]) {
          letter_count++;
          if (letter_count === temp.length) {
            result[result_index].push(temp);
            matched.push(i);
          }
        } else {
          break
        }
      }
    }

    for (let i = matched.length - 1; i > -1; i--) {
      strings.splice(matched[i], 1);
    }

    result_index++;
  }

  return result;

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
