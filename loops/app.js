/*
?   ------------DÖNGÜLER (LOOPS)-----------


*   1-) For
*   2-) While
*   3-) Do-While
*   4-) ForEach  -> dizilerde kullanılır


!   1-) For Döngüsü

    for(degisken ; koşul ; arttırma-azaltma){
        *kodlar
    }

!   2-) While Döngüsü

    while (koşul){
        *kodlar
        *sayacın değeri atanır
    }

!   3-) Do-While Döngüsü

    do{
        *kodlar      //? while' dan farkı -> önce kodlar çalışır sonra koşula bakar, yani koşul uymasa bile en az 1 kere kodlar çalışmış olur.
    }while (koşul);


*/



//?       for döngüsü

//1 den 10 a kadar yazdıralım.

for (let i = 1; i <= 10; i++) { //? değişkene 1 atanır, i<=10 koşulunu sağlıyor mu? sağlıyor bu yüzden console'a yazılır 
    console.log(i); //? daha sonra 1 arttırır. Değişkenin yeni değeri 2 olur. i<=10 koşulunu sağlıyor mu?
} //? sağlıyor bu yüzden console'a yazılır 

//0 dan 10'a kadar çifteri yazdıralım.

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//1 den 10'a kadar tekleri yazdıralım.

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//teklerde enes yazsın çiftlerde naber

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("Kübra");
    } else {
        console.log("Naber?")
    }
}

//50'den 1 e kadar yazsın ve sayıların toplam değerini görelim.

let toplam = 0;
for (let i = 50; i >= 1; i--) {
    toplam += i;
    console.log(i);
}
console.log("Toplam: " + toplam);



//?       while döngüsü

//1 den 10 a kadar yazdıralım.

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//0 den 10 a kadar çiftleri yazdıralım

let sayac1 = 0;
while (sayac1 <= 10) {
    console.log(sayac1);
    sayac1 += 2;
}

/* 
    let sayac=0;
    while(sayac<=10){
        if(sayac%2==0){
            console.log(sayac);
        }
        sayac++;
    }
*/

//0 den 10 a kadar tekleri yazdıralım

let sayac2 = 1;
while (sayac2 <= 10) {
    console.log(sayac2);
    sayac2 += 2;
}


//koşul belirtmeden 1 den itibaren yazdır ama 7 den sonra  durdur.

let sayac3 = 1;
while (true) {
    console.log(sayac3);
    if (sayac3 == 7) {
        break;
    }
    sayac3++;
}

console.clear();


//?       do-while döngüsü

//1 den 10'a kadar yazdıralım.

let sayac4 = 1;
do {
    console.log(sayac4);
    sayac4++;
} while (sayac4 <= 10);

//23 yaşında birinin 

let yas = 23; //? 23 döngünün içine girer console'a yazdırır daha sonra koşula bakar bu yüzden "Ehliyet alabilirsiniz!" 1 kere yazdırır.
do {
    console.log("Ehliyet alabilirsiniz!");
    yas++;

} while (yas >= 25);

//1'den 20 ye kadar olan tek sayıların toplamını bulalım.

let toplamm = 0;
let sayii = 1;
do {
    if (sayii % 2 == 1) {
        toplamm+=sayii;
    }
    sayii++;
} while (sayii <= 20);
console.log("Toplam: " + toplamm)