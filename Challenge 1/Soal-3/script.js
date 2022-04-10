console.log('Chapter 1 Challenge Number 3');

let regex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');

const checkEmail = (email) => {
  const result = regex.test(email);
  // return result;
  if (typeof email === 'string') {
    if (result === true) {
      return 'VALID';
    } else {
      return 'INVALID';
    }
  } else if (typeof email === 'number') {
    return 'Bukan merupakan sebuah string';
  } else {
    return 'Tidak memiliki parameter';
  }
};

// Expected Result
// Ketika function tersebut dipanggil
console.log(checkEmail('apranata@binar.co.id')); // Output yang keluar => "VALID"
console.log(checkEmail('apranata@binar.com')); // Output yang keluar => "VALID"
console.log(checkEmail('apranata@binar.')); // Output yang keluar => "INVALID"
console.log(checkEmail('apranata')); // Output yang keluar => "general format email berupa (something)@(some_domain).(some_toplevel_domain)"
console.log(checkEmail(3322)); // Output yang keluar => "Bukan merupakan sebuah string"
console.log(checkEmail()); // Output yang keluar => "Tidak memiliki parameter"

module.exports = checkEmail;
