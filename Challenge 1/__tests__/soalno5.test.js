const getSplitName = require('../Soal-5/script');

describe('Do Test For Splitting Name', () => {
  describe('For One Word Name', () => {
    test('it should be works', () => {
      expect(getSplitName('Yohanes')).toEqual({
        firstName: 'Yohanes',
        middleName: null,
        lastName: null,
      });
    });
  });

  describe('For Two Word Name', () => {
    test('it should be works', () => {
      expect(getSplitName('Yohanes Velly')).toEqual({
        firstName: 'Yohanes',
        middleName: null,
        lastName: 'Velly',
      });
    });
  });

  describe('For Three Word Name', () => {
    test('it should be works', () => {
      expect(getSplitName('Yohanes Velly Sabattino')).toStrictEqual({
        firstName: 'Yohanes',
        middleName: 'Velly',
        lastName: 'Sabattino',
      });
    });
  });
  describe('For More Than Three Word Name', () => {
    test('it should be works', () => {
      expect(getSplitName('Yohanes Velly Sabattino Aja')).toBe(
        'Error: This function is only for 3 words name'
      );
    });
  });
});
