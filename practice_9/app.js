// BİR CÜMLEDE HARF BULMA UYGULAMASI

/*
    toLowerCase()   ->  küçük harfe çevirir
    charAt(0)       ->  ilk harf
    charAt(1)       ->  ikinci harf
    charAt(2)       ->  üçüncü harf

*/

let metin = "Şuanda Yalova'da JavaScript dersleri vermekteyim.";
let harf = prompt("Lütfen harfi giriniz");

let sonuc = bul(harf);
alert("Harf saysı: " + sonuc);

function bul(harf) {
    let toplam = 0;
    for (let i = 0; i <= metin.length; i++) {
        if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
            toplam += 1;
        }
    }
    return toplam;
}

/*
bul("a");
bul("e");
*/