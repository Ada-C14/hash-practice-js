// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n^2 log n). The outer for loop in the function will run n times
// where n is the number of strings passed in. Inside of that for statement, the 
// most time intensive step is sorting the keys, which is O(n log n). Since it's nested
// in an O(n) loop, it becomes O(n * n * log n)
// Space Complexity: O(n). The function makes three data structures. groupHash in worst
// case scenario will have as many pairs as strings passed in -- it's size is proportional
// to the argument it's given. sortLetters and wordString will both increase in size
// linear to the increase in length of an individual string, making them O(m). O(m + n)
// simplifies to O(n)

// NOTE FROM CLASS: you don't need the first county hash
// you can just sort the strings into alphabetical order
// all anagrams will have the same one
// that's the key, the value is the array the words get put in
// function grouped_anagrams(strings) {
//   const groupHash = {};

//   for (const word of strings) {
//     wordHash = {};
//     for (const char of word) {
//       if (wordHash[char]) {
//         wordHash[char]++;
//       } else {
//         wordHash[char] = 1;
//       }
//     }

//     const sortLetters = Object.keys(wordHash).sort();
//     let wordString = '';

//     for (const letter of sortLetters) {
//       wordString += `${letter}${wordHash[letter]}`;
//     }

//     if (groupHash[wordString]) {
//       groupHash[wordString].push(word);
//     } else {
//       groupHash[wordString] = [word];
//     }
//   }

//   return Object.values(groupHash);
// }

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
// Time Complexity: O(n * m) where n is the length of the array and m
// is the value of k. The nested for loops are O(m) for the outer loop,
// which runs k times, and O(n) for the inner loop, which worst case 
// scenario will have to check every pair in allHash, which worst
// case scenario will have n elements.
// Space Complexity: O(n). allHash in the worst case will increase in
// size linear to an increase in the size of the list, as will the
// allValues array. returnArray will increase in size with increase in the
// value of k.
// MY ORIGINAL:
// function top_k_frequent_elements(list, k) {
//   const allHash = {};
//   for (const int of list) {
//     if (allHash[int]) {
//       allHash[int]++;
//     } else {
//       allHash[int] = 1;
//     }
//   }

//   const returnArray = [];

//   const allValues = Object.values(allHash).sort((a, b) => b - a);

//   for (i = 0; i < k; i++) {
//     currentValue = allValues[i];
//     for (const key in allHash) {
//       if (allHash[key] === currentValue) {
//         returnArray.push(key);
//         delete allHash[key];
//         break;
//       }
//     }
//   }

//   return returnArray.map(key => parseInt(key));
// }

// AFTER VIEWING CLASS EXAMPLE:
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

  // NOTE FROM CLASS: you can use custom sort function to sort keys 
  // by their value in hash
  // const keysSorted = Object.keys(hash).sort((a, b) => hash[b] - hash[a])
  // then you can skip the iterating over the hash comparing values bit
  // can just return the first k values
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
  if (i < 3 && j < 3) {
    return 0;
  } else if (i < 3 && j > 2 && j < 6) {
    return 1;
  } else if (i < 3 && j > 5) {
    return 2;
  } else if (i > 2 && i < 6 && j < 3) {
    return 3;
  } else if (i > 2 && i < 6 && j > 2 && j < 5) {
    return 4;
  } else if (i > 2 && i < 6 && j > 5) {
    return 5;
  } else if (i > 5 && j < 3) {
    return 6;
  } else if (i > 5 && j > 2 && j < 6) {
    return 7;
  } else if (i > 5 && j > 5) {
    return 8
  }
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
