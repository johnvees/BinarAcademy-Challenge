console.log('Chapter 1 Challenge Number 2');

const checkTypeNumber = (givenNumber) => {
  // return typeof(givenNumber)
  if (typeof givenNumber === 'number') {
    if (givenNumber % 2 === 0) {
      return 'GENAP';
    } else if (givenNumber % 2 === 1) {
      return 'GANJIL';
    }
  } else if (typeof givenNumber === 'undefined') {
    return 'Error: Bro where is the parameter';
  } else {
    return 'Error: Invalid data type';
  }
};

// Expected Result
// ketika function tersebut dipanggil
console.log(checkTypeNumber(10)); // Output yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // Output yang keluar => "GANJIL"
console.log(checkTypeNumber('3')); // Output yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})); // Output yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])); // Output yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()); // Output yang keluar => "Error: Bro where is the parameter"

module.exports = checkTypeNumber;
