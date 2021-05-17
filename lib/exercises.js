// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n + m log(m))
// Space Complexity: O(n) 

// n length of string
// m length of longest word
function grouped_anagrams(strings) {
  let anagramsHashes = {}

  for (const string of strings) { //O(n)
    const sortedString = string.split("").sort().join(""); // O(m log(m)))

    if (anagramsHashes[sortedString]) {
      anagramsHashes[sortedString].push(string);
    } else {
      anagramsHashes[sortedString] = [string];
    }
  }

  return Object.values(anagramsHashes); // O(n) where j is the # of groups of anagrams
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  if (list.length < 1) return [];

  let numberCount = {} // key is the number, value is the frequency
  for (const num of list) { // O(n)
    if (numberCount[num]) {
      numberCount[num]++;
    } else {
      numberCount[num] = 1;
    }
  }

  let result = [];
  // sort the numbers from the hash from most frequent to least frequent
  const sorted = Object.keys(numberCount).sort((num1, num2) => numberCount[num2] - numberCount[num1]); // assume O(n log n) - mergesort
  // following does not work because js at some point converts the keys to strings 
  // return sorted.slice(0, k);
  for (let i = 0; i < k; i++) { // O(k)
    result.push(parseInt(sorted[i]));
  }

  return result;
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: O(1) fixed size grid 9 x 9
// Space Complexity: O(1) also fixed, the sets would be max the same size as the grid since they are mapping each element

function valid_sudoku(table) {
  // check the rows
  for (let row = 0; row < 9; row++) {
    let rowValues = new Set;

    for (let col = 0; col < 9; col++) {
      let current = table[row][col];
      if (current != ".") {
        if (rowValues.has(current)) return false;
        rowValues.add(current);
      }
    }
  }

  // check the columns
  for (let col = 0; col < 9; col++) {
    let colValues = new Set;

    for (let row = 0; row < 9; row++) {
      let current = table[row][col];
      if (current != ".") {
        if (colValues.has(current)) return false;
        colValues.add(current);
      }
    }
  }

  // check the sub matrices 3 x 3
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col +=3) {
      if (!subMatrixHelper(table, row, col)) return false;
    }
  }
  
  return true;
}

function subMatrixHelper(table, rowStart, colStart) {
  for (let r = 0; r < 3; r ++) {
    for (let c = 0; c < 3; c ++) {
      let subMatrixValues = new Set;
      const current = table[rowStart + r][colStart + c];
      if (current != ".") {
        if (subMatrixValues[current]) return false;
        subMatrixValues.add(current);
      }
    }
  }
  return true;

}


module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
