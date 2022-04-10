const checkEmail = require('../Soal-3/script');

describe('Test Email', () => {
  describe('Test For Valid Email', () => {
    test('it should be a valid email', () => {
      expect(checkEmail('apranata@binar.co.id')).toBe('VALID');
    });

    test('it should be a valid email', () => {
      expect(checkEmail('apranata@binar.com')).toBe('VALID');
    });
    
    test('it should be a valid email', () => {
      expect(checkEmail('yohanesvelly23@gmail.com')).toBe('VALID');
    });
  });

  describe('Test For Invalid Email', () => {
    test('it should be a Invalid email', () => {
      expect(checkEmail('apranata@binar.')).toBe('INVALID');
    });

    test('it should be a Invalid email', () => {
      expect(checkEmail('apranata')).toBe('INVALID');
    });

    test('it should be a Invalid email', () => {
      expect(checkEmail('@binar.com')).toBe('INVALID');
    });
  });
});
