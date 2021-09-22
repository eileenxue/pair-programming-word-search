// PAIR PROGRAMMING EXERCISE

// Transpose Function 
const transpose = function(matrix) {
  // Put your solution here
  let array = [];

  for (let i = 0; i < matrix[0].length; i++) {
    array.push([]);
  }

  for (let row = 0; row < matrix.length; row++){
    for (let col = 0; col < matrix[row].length; col++){
      array[col][row] = matrix[row][col];
    }
  }
  return array;
};

// EDIT HERE
const wordSearch = (letters, word) => { 
    // When word or wordsearch is empty
    if(word === '') {
        return false;
    }
    if (letters.length === 0) {
        return false;
    }

    // Horizontal
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    // Reverse horizontal
    const reverseJoin = [];
    horizontalJoin.forEach(element => {
        reverseJoin.push(element.split('').reverse().join(""));
    });

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of reverseJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch