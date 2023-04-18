// AMSTRONG SAYISI BULMA

/*

Basamaklarının küpleri toplamı kendisine eşit olan sayılar (153-370-407)

407 ->(4*4*4)+(7*7*7)=407    Bu yüzden 407 armstrong bir sayıdır.


!  sayi.charAt(0)   -> 0.indeksteki rakamı getir demek

*/

//470

let sayi = prompt("Lütfen bir sayı giriniz..");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
        let rakam = sayi.charAt(i);
        toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert("Amstrong sayısıdır")
}else{
    alert("Amstrong değildir.")
}