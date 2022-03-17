console.log("Chapter 1 Challenge Number 4");

let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");

const isValidPassword = (givenPassword) => {
  const result = regex.test(givenPassword);
  // return result;
  if (typeof givenPassword === "string") {
    if (result === true) {
      return result;
    } else {
      return result;
    }
  } else if (typeof givenPassword === "number") {
    return result, "ERROR";
  } else {
    return result, "ERROR";
  }
};

// Expected Result
// Ketika function tersebut dipanggil
console.log(isValidPassword("Meong2021"));
// EXPECTED OUTPUT => true
// (Karena memenuhi requirement, Meong2021 terdiri dari 9 karakter, ada huruf besar, ada huruf kecil, dan ada angka)

console.log(isValidPassword("meong2021"));
// EXPECTED OUTPUT => false
// (Karena meong2021 tidak ada huruf besar)

console.log(isValidPassword("@eong"));
// EXPECTED OUTPUT => false
// (Karena @eong tidak ada angka dan hanya terdiri dari 5 karakter)

console.log(isValidPassword("Meong2"));
// EXPECTED OUTPUT => false
// (Karena Meong2 hanya terdiri dari 6 karakter)

console.log(isValidPassword(0));
// EXPECTED OUTPUT => ERROR
// (Karena 0 bukanlah sebuah string)

console.log(isValidPassword());
// EXPECTED OUTPUT => ERROR
// (Karena tidak berisi parameter apa-apa)
