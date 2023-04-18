// FAKTÖRİYEL BULMA

/*
    5 ->      5.        4.         3.         2.       1
*            1*5       1*4        1*3        1*2      1*1  

*/





//5

let sayi = Number(prompt("Lütfen bir sayı giriniz.."));
let carpim=1;

for(let i=1; i<=sayi; i++){
    carpim=carpim*i;
}
alert("Sonuç"+ carpim);