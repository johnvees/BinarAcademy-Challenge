console.log('Chapter 1 Challenge Number 5');

const getSplitName = (personName) => {
  if (typeof personName === 'string') {
    const panjangNama = personName.split(' ');
    // return panjangNama;
    if (panjangNama.length === 4) {
      return 'Error: This function is only for 3 words name';
    } else if (panjangNama.length === 3) {
      for (let i = 0; i <= panjangNama.length; i++) {
        const result = panjangNama.slice(0, i + 1).join(' ');
        const result1 = panjangNama.slice(i + 1, i + 2).join(' ');
        const result2 = panjangNama.slice(i + 2, i + 3).join(' ');

        return (pemisahNama = {
          firstName: result,
          middleName: result1,
          lastName: result2,
        });
      }
    } else if (panjangNama.length === 2) {
      for (let i = 0; i <= panjangNama.length; i++) {
        const result = panjangNama.slice(0, i + 1).join(' ');
        const result2 = panjangNama.slice(i + 1, i + 3).join(' ');

        return (pemisahNama = {
          firstName: result,
          middleName: null,
          lastName: result2,
        });
      }
    } else if (panjangNama.length === 1) {
      for (let i = 0; i <= panjangNama.length; i++) {
        const result = panjangNama.slice(0, i + 1).join(' ');

        return (pemisahNama = {
          firstName: result,
          middleName: null,
          lastName: null,
        });
      }
    }
  } else {
    return 'ERROR : 0 bukanlah suatu string';
  }
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil

console.log(getSplitName('Aldi Daniela Pranata'));
// EXPECTED OUTPUT
// {firstName : 'Aldi', middleName : 'Daniela', lastName : 'Pranata'}

console.log(getSplitName('Dwi Kuncoro'));
// EXPECTED OUTPUT
// {firstName : 'Dwi', middleName : null, lastName : 'Kuncoro'}

console.log(getSplitName('Aurora'));
// EXPECTED OUTPUT
// {firstName : 'Aurora', middleName : null, lastName : null}

console.log(getSplitName('Aurora Areliya Sukma Darma'));
// EXPECTED OUTPUT
// Error : This function is only for 3 word name

console.log(getSplitName(0));
console.log(getSplitName(1));
// EXPECTED OUTPUT
// Error : 0 bukanlah sebuah string
