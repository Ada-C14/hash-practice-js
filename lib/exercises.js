// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n*m log m) where n is the length of strings and
// m is the length of the longest string in the strings array.
// The for loop will run n times. Nested inside of that loop is a 
// sort function that will be O(m log m) for strings of length m.
// Space Complexity: O(n). The sortedHash and the returned values array
// will increase in size proportionate to the size of the input.
function grouped_anagrams(strings) {
  const sortedHash = {}

  for (const string of strings) {
    const key = string.split("").sort().join("");
    if (sortedHash[key]) {
      sortedHash[key].push(string);
    } else {
      sortedHash[key] = [string];
    }
  }
  return Object.values(sortedHash)
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n log n). The controlling factor is the sort function
// which is O(n log n).
// Space Complexity: O(n). allHash and allKeys will both increase 
// linear to the size of list. returnArray will increase with the size of k.
function top_k_frequent_elements(list, k) {
  if (list.length < 1) return [];

  const allHash = {};
  for (const int of list) {
    if (allHash[int]) {
      allHash[int]++;
    } else {
      allHash[int] = 1;
    }
  }

  const returnArray = [];
  const allKeys = Object.keys(allHash).sort((a, b) => allHash[b] - allHash[a]);
  for (i = 0; i < k; i++) {
    returnArray.push(parseInt(allKeys[i]));
  }

  return returnArray;
}

// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: O(1). The function does have a nested for loop. However,
// the input is always going to be a nine-by-nine board. The function
// will always have to look at, at most, 81 values one at a time.
// The time complexity does not change with the input but is constant. 
// Space Complexity: O(1). The function makes 3 data structure that each,
// worst case scenario, end up holding the same amount of values as in the
// input. However, at most, this will be 81 values, 3 times -- a constant value.
function valid_sudoku(table) {
  const rowsHash = {};
  const columnsHash = {};
  const subgridsHash = {};

  for (i = 0; i < table.length; i++) {
    rowsHash[i] = {};

    for (j = 0; j < table[0].length; j++ ) {
      square = table[i][j]
      subgrid = subgrid_helper(i, j)

      if (!columnsHash[j]) columnsHash[j] = {};
      if (!subgridsHash[subgrid]) subgridsHash[subgrid] = {}

      if (square != ".") {
        if (rowsHash[i][square] || columnsHash[j][square] || subgridsHash[subgrid][square]) {
          return false;
        } else {
          rowsHash[i][square] = true;
          columnsHash[j][square] = true;
          subgridsHash[subgrid][square] = true;
        }
      }
    }
  }

}

function subgrid_helper(i, j) {
  const subgridLegend = {
    "00": 0,
    "01": 1,
    "02": 2,
    "10": 3,
    "11": 4,
    "12": 5,
    "20": 6,
    "21": 7,
    "22": 8
  };

  const subgridKey = i.toString() + j.toString();
  return subgridLegend[subgridKey];
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
