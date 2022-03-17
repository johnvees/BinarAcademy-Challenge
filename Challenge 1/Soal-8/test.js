console.log('test nomor 8');

const getInfoPenjualan = (dataPenjualan) => {
  dataPenjualan = dataPenjualanNovel;

  let mapDataPenjualan = dataPenjualanNovel.map(Object);

  mapDataPenjualan = [...new Set(mapDataPenjualan)];

  const tempPenulis = 'Tere Liye';

  tesdata = dataPenjualanNovel.filter((penulis) =>
    tempPenulis.includes(penulis.penulis)
  );

  console.log(tesdata);
  return mapDataPenjualan;
  //   for (let i = 0; i < dataPenjualan.length; i++) {
  //   }
};

const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
