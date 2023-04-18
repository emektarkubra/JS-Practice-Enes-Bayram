/*
            ?SORULAR
            1-Türkçe 40   (4 puan)
            2-Matematik 40 (4 puan)
            3-Sosyal bilimler 20 (4 puan)
            4-Fen bilimleri 20 (4 puan)

                *4 yanlış 1 doğruyu götürsün.


            ----> 100 puanı ÖSYM veriyor
            ----> Okul puanı max 60 veriyor

            switch - 1 puan hesapla
            case   - 2 çıkış yap

*/

let turkceSoruSayisi = 40,
    matematikSoruSayisi = 40,
    sosyalBilimlerSoruSayisi = 20,
    fenBilimlerSoruSayisi = 20;
let ösym = 100;
let yeniSatir = "\r\n";
let secim = "TYT puan hesaplama uygulamasına hoşgeldiniz!" + yeniSatir +
    "1-Sınav puanını hesapla" + yeniSatir +
    "2-Çıkış yap"
let deger = prompt(secim);

switch (deger) {

    case "1":
        let turkceDogruSayisi = Number(prompt("Türkçe doğru sayınızı giriniz.."));
        let turkceYanlisSayisi = Number(prompt("Türkçe yanlış sayınızı giriniz.."));
        let turkceNet = turkceDogruSayisi - (turkceYanlisSayisi / 4);
        alert("Türkçe netiniz: " + turkceNet);


        let matematikDogruSayisi = Number(prompt("Matematik doğru sayınızı giriniz.."));
        let matematikYanlisSayisi = Number(prompt("Matematik yanlış sayınızı giriniz.."));
        let matematikNet = matematikDogruSayisi - (matematikYanlisSayisi / 4);
        alert("Matematik netiniz: " + matematikNet);

        let sosyalBilimlerDogruSayisi = Number(prompt("Sosyal bilimler doğru sayınızı giriniz.."));
        let sosyalBilimlerYanlisSayisi = Number(prompt("Sosyal bilimler yanlış sayınızı giriniz.."));
        let sosyalBilimlerNet = sosyalBilimlerDogruSayisi - (sosyalBilimlerYanlisSayisi / 4);
        alert("Sosyal Bilimler netiniz: " + sosyalBilimlerNet);

        let fenBilimlerDogruSayisi = Number(prompt("Fen bilimler doğru sayınızı giriniz.."));
        let fenBilimlerYanlisSayisi = Number(prompt("Fen bilimler yanlış sayınızı giriniz.."));
        let fenBilimlerNet = fenBilimlerDogruSayisi - (fenBilimlerYanlisSayisi / 4);
        alert("Fen bilimler netiniz: " + fenBilimlerNet);

        let okul = Number(prompt("Lütfen okul puanını giriniz.."));

        let tytPuani = (turkceNet + matematikNet + sosyalBilimlerNet + fenBilimlerNet) * 4 + okul + ösym;
        alert("TYT Puanınız: " + tytPuani);

        break;

    case "2":
        alert("Uygulamadan çıkış yaptınız!");
        break;

    default:
        alert("Geçerli bir seçim yapınız!");
        break;
}