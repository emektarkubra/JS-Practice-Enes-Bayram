// ASAL SAYI BULMA UYGULAMASI

/*

Asal sayı -> 1 ve kendisi dışındaki sayılara bölünmeyen

14 -> 2 3 4 5 6 7 8 9 10....   (yarısına kadar bölümüne baksak yeterli olacak)
15 -> 2 3 4 5 6 7.5 (yarısı 7.5 o yüzden yuvarlarız)



! let a=Math.floor( 7.7);   ->  sayıyı aşağı yuvarlar 

*/


let sayi =Number(prompt("Lütfen bir sayı giriniz."));
let sonuc = true;

for (let i = 2; i <= (Math.floor(sayi / 2)); i++) {   //? mesela 15 de 3 e bölündüğünde gerisine bakmamıza gerek yok bu yüzden
    if (sayi%i == 0) {
        sonuc = false;
        break;
    }
    
}
if(sonuc){
    alert(sayi + " Asaldır");
}else{
    alert(sayi + " Asal değildir");
}
