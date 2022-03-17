console.log("Chapter 1 Challenge Number 6");

const getAngkaTerbesarKedua = (dataAngka) => {
  const iniArrayLo = Array.isArray(dataAngka);
  // console.log(iniArrayLo);
  if (iniArrayLo === true) {
    let intArray = dataAngka.map(Number);
    intArray = [...new Set(intArray)];
    const secondLargestNumber = intArray.sort((a, b) => {
      return b - a;
    })[1];
    return secondLargestNumber;
  } else {
    return "Error";
  }
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
// EXPECTED OUTPUT:
// 8

console.log(
  getAngkaTerbesarKedua(0) + " : bukan merupakan sebuah nilai atau deret angka"
);
// EXPECTED OUTPUT:
// "ERROR : bukan merupakan sebuah nilai atau deret angka"

console.log(getAngkaTerbesarKedua() + " : Tidak memiliki parameter");
// EXPECTED OUTPUT:
// "ERROR : Tidak memiliki parameter"
