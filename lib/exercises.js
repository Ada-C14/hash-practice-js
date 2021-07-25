// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {

  if (!strings.length) {
    return []
  }

let anagrams = {}

for (const string of strings) {
  const sortedString = string.split("").sort().join("");
  // console.log(sortedString)
  
  if(anagrams[sortedString]) {
    // console.log(anagrams[sortedString])
    anagrams[sortedString].push(string) 

  }else {
    anagrams[sortedString] = [string];
  }
}
return Object.values(anagrams)




}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
if (!list.length) return []

  let numbersCount = {}

  for (const num of list) {
    numbersCount[num] = numbersCount[num] ? numbersCount[num] + 1 : 1;
  }
  console.log(numbersCount)

  let topFrequentElements = []

  const valuesList = Object.keys(numbersCount).sort((num1, num2) => numbersCount[num2] - numbersCount[num1]);

  for (let i = 0; i < k; i++) {
    topFrequentElements.push(parseInt(valuesList[i]))
  }

  return topFrequentElements

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
