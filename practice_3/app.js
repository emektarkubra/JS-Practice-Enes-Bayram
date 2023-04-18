/*
       ?ATM UYGULAMASI

        Bakiye : 1000 TL
        
        1-Bakiye görüntüleme
        2-Para çekme
        3-Para yatırma
        4-Çıkış

*/

let yeniSatir = "\r\n";
let bakiyeGörüntüleme = 1,
    paraCekme = 2,
    paraYatirma = 3,
    cıkıs = 4;

let bakiye = 1000;
let kullaniciSecimi = "1-Bakiye görüntüleme" + yeniSatir +
    "2-Para çekme" + yeniSatir +
    "3-Para yatırma" + yeniSatir +
    "4-Çıkış" + yeniSatir +
    "Lütfen yapacağınız işlemi seçiniz..";

let deger = prompt(kullaniciSecimi);

switch (deger) {
    case "1":
        alert("Bakiyeniz: " + bakiye + "'dir.");
        break;

    case "2":
        let cekilecekTutar = prompt("Çekeceğiniz para tutarınızı giriniz.");
        if (cekilecekTutar <= bakiye) {
            let kalanBakiye = bakiye - cekilecekTutar;
            alert("Çekilecek tutar: " + cekilecekTutar);
            alert("Kalan bakiye: " + kalanBakiye);
        } else {
            alert("Bakiyeniz yetmemektedir.");
        }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Lütfen yatırılacak tutarı giriniz."));
        let yeniBakiye = bakiye + yatirilacakTutar;
        alert("Yatıracağınız tutar: " + yatirilacakTutar);
        alert("Yeni bakiyeniz: " + yeniBakiye);
        break;

    case "4":
        console.log("Çıkış yaptınız.");
        break;

    default:
        console.log("Geçerli bir sayı giriniz!");
        break;
}