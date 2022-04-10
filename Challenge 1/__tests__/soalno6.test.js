const getAngkaTerbesarKedua = require('../Soal-6/script');

describe('Testing For Get The Second Largest Number', () => {
  test('it should get second largest number', () => {
    expect(getAngkaTerbesarKedua([9, 4, 7, 7, 4, 3, 2, 2, 8, 8])).toBe(8);
  });

  test('it should get second largest number', () => {
    expect(getAngkaTerbesarKedua([1, 5, 8, 9, 10, 11, 13, 14, 15, 20])).toBe(
      15
    );
  });

  test('it should get second largest number', () => {
    expect(getAngkaTerbesarKedua([2, 4, 5, 6, 7, 11, 14, 15, 16, 17])).toBe(16);
  });

  test('it should get second largest number', () => {
    expect(getAngkaTerbesarKedua([17])).toBe(16);
  });
});
