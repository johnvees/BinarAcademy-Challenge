const checkTypeNumber = require('../Soal-2/script');

describe('test suatu bilangan genap / ganjil', () => {
  describe('it should even', () => {
    test('it should even', () => {
      expect(checkTypeNumber(6)).toBe('GENAP');
    });

    test('it should even', () => {
      expect(checkTypeNumber(812310)).toBe('GENAP');
    });

    test('it should even', () => {
      expect(checkTypeNumber(82324)).toBe('GENAP');
    });
  });

  describe('it should odds', () => {
      test('it should odds', () => {
        expect(checkTypeNumber(5)).toBe('GANJIL');
      });
      test('it should odds', () => {
        expect(checkTypeNumber(1231551)).toBe('GANJIL');
      });
      test('it should odds', () => {
        expect(checkTypeNumber(12367)).toBe('GANJIL');
      });
  });
});
