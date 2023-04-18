// ÜRÜN ARAMA UYGULAMASI

let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}

let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475
}
let urun3 = {
    isim: "ACER Gaming",
    kategori: "Teknoloji",
    fiyat: 13.999
}

let urun4 = {
    isim: "LENOVA V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}

let urun5 = {
    isim: "LENOVA V14",
    kategori: "Teknoloji",
    fiyat: 4.399
}
let urun6 = {
    isim: "LENOVA Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Lütfen ürün ismi giriniz..");


filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);


function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)) { //? 0 verince tüm string içerisinde arama yapar
            filtreliUrunler.push(urun);
        }
    });
}


function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("--------------------------");
        console.log(urun.isim + " | " + urun.kategori + " | " + urun.fiyat);
        console.log("--------------------------");
    });
}