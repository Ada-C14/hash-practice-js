// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n^3) - outer while loop (line 10) has a nested for loop (lines 24 and 27), it also has .splice() nested in a for loop, but this should still be O(n^3) overall.
// Space Complexity: O(n) - result, hash, and matched will be at most length n, where n is the number of elements in the strings array. Even though result is a nested array, it will never contain more than n elements.
function grouped_anagrams(strings) {

  let result = [];
  let resultIndex = 0;

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
      let letterCount = 0;
      let temp = strings[i];
      for (let j = 0; j < temp.length; j++) {
        if (hash[temp[j]]) {
          letterCount++;
          if (letterCount === temp.length) {
            result[resultIndex].push(temp);
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

    resultIndex++;
  }

  return result;

}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  let hash = {};
  let result = [];

  if (list.length === 0) { 
    return result;
  }

  for (i in list) {
    if (hash[list[i]]) {
      hash[list[i]]++;
    } else {
      hash[list[i]] = 1;
    }
  }

  let keysSorted = Object.keys(hash).sort(function(a,b) {
    // returns keys in descending order of freq
    return (hash[b]-hash[a])
    }
  )

  for (let i = 0; i < k; i++) {
    result.push(parseFloat(keysSorted[i]));
  }

  return result

}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  // start by checking that the same value doesn't occur twice in the same row
  for (let i = 0; i < 9; i++) {
    let rowHash = {};
    for (let j = 0; j < 9; j++) {
      if (table[i][j] === '.') {
        continue;
      } else if (rowHash[table[i][j]]) {
        return false;
      } else {
        rowHash[table[i][j]] = j;
      }
    }
  }

  // check for column duplicates
  for (let i = 0; i < 9; i++) {
    let colHash = {};
    for (let j = 0; j < 9; j++) {
      if (table[j][i] === '.') {
        continue;
      } else if (colHash[table[j][i]]) {
        return false;
      } else {
        colHash[table[j][i]] = i;
      }
    }
  }

  // check for 3x3 grid duplicates
  let _3x3 = {};
  let i = 0;
  let j = 0;
  let boxes = 9;
  // there will be a total of 9 "boxes" to check on the Sudoku 3x3 grid
  // the box colum number represents the 3 columns of the 3x3 grid
  let boxColNum = 1;

  while (boxes < 9) {
    if (table[i][j] === '.') {
      continue;
    } else if (_3x3[table[i][j]]) {
      return false;
    } else {
      _3x3[table[i][j]] = i;
    }

    j++;
    i++;

    if (j === 3 && boxColNum === 1) {
      j = 0;
    } else if (j === 6 && boxColNum === 2) {
      j = 3;
    } else if (j === 9 && boxColNum === 3) {
      j = 6;
    }
    
    if (i === 3 || i === 6) {
      _3x3 = {}
      boxes++;
    }

    if (i > 8) { 
      boxColNum++;
      if (boxColNum === 2) {
        j = 3;
      } else if (boxColNum === 3) {
        j = 6;
      }
      i = 0;
    }
  }

}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
