const isValidPassword = require('../Soal-4/script');

describe('Test Password', () => {
  describe('Test For Valid Password', () => {
    test('it should be a valid password', () => {
      expect(isValidPassword('Meong2021')).toBe(true);
    });

    test('it should be a valid password', () => {
      expect(isValidPassword('@bcdE1234')).toBe(true);
    });

    test('it should be a valid password', () => {
      expect(isValidPassword('mEonG20r1')).toBe(true);
    });
  });

  describe('Test For Invalid Password', () => {
      test('it should be a valid password', () => {
      expect(isValidPassword('meong2021')).toBe(false);
    });

    test('it should be a valid password', () => {
      expect(isValidPassword('@eong')).toBe(false);
    });

    test('it should be a valid password', () => {
      expect(isValidPassword('Meong2')).toBe(false);
    });
  });
});
