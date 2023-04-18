/*
    -------ARİTMATİK OPERATÖRLER--------

        +   -> artı
        -   -> eksi
        *   -> çarp
        /   -> böl
        %   -> mod (kalan)
        ++  -> 1 artır
        --  -> 1 azalt
        **  -> üst alma

*/

//* artı (+)

let not1 = 60;
let not2 = 70;
console.log (not1 + not2);
console.log("Notlarınız: "+ (not1+not2));  // toplama önceliği için number'lar ayrı parantezde yapılır

let sayi1 = "5";
let sayi2 =2;
console.log(sayi1+sayi2);  // number ile string toplanırken yanyana yazar

//* eksi (-)

let not3 = 60;
let not4 = 70;
console.log (not1 - not2);

//* çarp (*)

let not5 = 6;
let not6 = 8;
console.log (not5 * not6);

//* böl (/)

let not7 = 60;
let not8 = 70;
let sonuc = (not7+not8)/2;
console.log(sonuc);

//* mod alma (%)

console.log(10%3);
console.log(12%5);

//* 1 arttırma / 1 azaltma (++/--)

let a = 10;
a++; // 11
a++; // 12
a--; // 11
a--; // 10
console.log(a);

//* üst alma (**)

console.log(2**3);
console.log(5**3);




