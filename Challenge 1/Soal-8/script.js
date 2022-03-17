console.log('Chapter 1 Challenge Number 8');

let idrCurrency = Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

const getInfoPenjualan = (dataPenjualan) => {
  dataPenjualan = dataPenjualanNovel; // tidak berguna

  if (typeof dataPenjualan === 'object') {
    let totalModal = 0,
      totalKeuntungan = 0,
      persentaseKeuntungan = 0,
      theMostSold = 0,
      filterFromSold = 0,
      tempProdukTerlaris = 0,
      tempPenulisTerlaris = 0,
      resultProdukTerlaris = 0,
      resultPenulisTerlaris = 0;

    for (let i = 0; i < dataPenjualan.length; i++) {
      totalModal +=
        dataPenjualan[i].hargaBeli *
        (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
      // console.log(totalModal);

      totalKeuntungan +=
        dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual -
        dataPenjualan[i].hargaBeli *
          (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
      // console.log(totalKeuntungan);

      persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
      // console.log(persentaseKeuntungan);

      theMostSold = Math.max.apply(
        Math,
        dataPenjualan.map(function (dataPenjualan) {
          return dataPenjualan.totalTerjual;
        })
      );

      filterFromSold = dataPenjualan.filter((dataPenjualan) => {
        return dataPenjualan.totalTerjual === theMostSold;
      });

      tempProdukTerlaris = filterFromSold.map(function (dataPenjualan) {
        return dataPenjualan.namaProduk;
      });

      tempPenulisTerlaris = filterFromSold.map(function (dataPenjualan) {
        return dataPenjualan.penulis;
      });

      resultProdukTerlaris = tempProdukTerlaris.join(); // bisa diganti jadi index ke-0
      resultPenulisTerlaris = tempPenulisTerlaris.join();
    }
    return (hasilAkhir = {
      totalKeuntungan: idrCurrency.format(totalKeuntungan),
      totalModal: idrCurrency.format(totalModal),
      persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + '%',
      produkBukuTerlaris: resultProdukTerlaris,
      penulisTerlaris: resultPenulisTerlaris,
    });
  } else {
    return 'ERROR';
  }
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
