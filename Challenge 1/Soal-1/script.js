console.log('Chapter 1 Challenge Number 1');

// const changeWord = (selectedText, changedText, text) => {
//   if (text === kalimat1) {
//     if (selectedText === 'mencintai') {
//       console.log('Andini sangat ' + changedText + ' kamu selamanya');
//     }
//   } else if (text === kalimat2) {
//     if (selectedText === 'bromo') {
//       console.log(
//         'Gunung ' +
//           changedText +
//           ' tak akan mampu menggambarkan besarnya cintaku padamu'
//       );
//     }
//   }
// };

const changeWord = (selectedText, changedText, text) => {
  if (text === kalimat1) {
    const result = kalimat1.replace(selectedText, changedText);
    return result;
  } else if (text === kalimat2) {
    const result = kalimat2.replace(selectedText, changedText);
    return result;
  }
};

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 =
  'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// Expected Result
// ketika function tersebut dipanggil dengan variable kalimat1
console.log(changeWord('mencintai', 'membenci', kalimat1));

//maka output yang harus keluar adalah => 'Andini sangat membenci kamu selamanya'

// ketika function tersebut dipanggil dengan variable kalimat2
console.log(changeWord('bromo', 'semeru', kalimat2));
// maka output yang harus keluar adalah => 'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'

module.exports = changeWord;
