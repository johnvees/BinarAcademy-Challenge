const changeWord = require('../Soal-1/script');

describe('Test Ganti Kata', () => {
  describe('Ganti Kata Pada Kalimat 1', () => {
    test('it should change mencintai to membenci', () => {
      expect(
        changeWord(
          'mencintai',
          'membenci',
          'Andini sangat mencintai kamu selamanya'
        )
      ).toBe('Andini sangat membenci kamu selamanya');
    });

    test('it should change mencintai to memarahi', () => {
      expect(
        changeWord(
          'mencintai',
          'memarahi',
          'Andini sangat mencintai kamu selamanya'
        )
      ).toBe('Andini sangat memarahi kamu selamanya');
    });

    test('it should change mencintai to menyayangi', () => {
      expect(
        changeWord(
          'mencintai',
          'menyayangi',
          'Andini sangat mencintai kamu selamanya'
        )
      ).toBe('Andini sangat menyayangi kamu selamanya');
    });
  });

  describe('Ganti Kata Pada Kalimat 2', () => {
    test('it should change bromo to semeru', () => {
      expect(
        changeWord(
          'bromo',
          'semeru',
          'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'
        )
      ).toBe(
        'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
      );
    });

    test('it should change bromo to merapi', () => {
      expect(
        changeWord(
          'bromo',
          'merapi',
          'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'
        )
      ).toBe(
        'Gunung merapi tak akan mampu menggambarkan besarnya cintaku padamu'
      );
    });

    test('it should change bromo to arjuna', () => {
      expect(
        changeWord(
          'bromo',
          'arjuna',
          'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'
        )
      ).toBe(
        'Gunung arjuna tak akan mampu menggambarkan besarnya cintaku padamu'
      );
    });
  });
});
