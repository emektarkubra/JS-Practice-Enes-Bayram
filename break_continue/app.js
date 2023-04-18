/*

*-------BREAK-CONTINUE------ 

-Döngülere özgüdür.
-Break : döngüyü belli noktada kırmayı sağlar.
-Continue : döngüyü bir kere mahsus kırar.
            continue'a geldikten sonraki hiçbir kodu çalıştırma başa dön demek



*/


// 1'den 10 kadar sayıları yazdıralım 8 e geldiğimizde döngüden çıkalım.


let sayac = 1;
while (sayac<=10){
    console.log(sayac);
    if(sayac==8){
        break;
    }
    sayac++;
}

// 1 2 3 4 5 6 7 8 9 10 - 8'i yazma

let a = 0;
while(a<10){
    a++;
    if(a==8){
        continue;
    }
    console.log(a);
   
}

/*
let b = 0;
while(b<10){
    if(b==8){
        continue;        //? sonsuz döngüye girer
    }
    b++;
    console.log(b);
   
}

*/