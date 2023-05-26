let mesaj =
    `
Migrosa Hoşgeldiniz.
Money Kartınız Var mı?
1- Evet
2- Hayır
`

let sonuc = confirm(mesaj);

const urunler = [{
        urunIsmi: "Süt",
        fiyat: 15,
    },

    {
        urunIsmi: "Bebek bezi",
        fiyat: 100,
    },

    {
        urunIsmi: "Kuşbaşı",
        fiyat: 220,
    }
]

if(sonuc){
    let odenecekTutar;
    let isim = prompt("Adınızı Giriniz:");
    let soyisim = prompt("Soyadınızı Giriniz:");
    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(
        `
        Müşteri Bilgileri : ${musteri.isim} ${musteri.soyisim}
        Ödenecek Tutar : ${odenecekTutar}
        `
    )
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(
        `
        Ödenecek Tutar : ${odenecekTutar}
        `
    )  
}