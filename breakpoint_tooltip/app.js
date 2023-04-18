/*
?   -----------Breakpoint - Tooltip------------

*   1-) Tooltip -> metotlar yazılırken ortaya çıkan açıklama kutucuklarıdır ve metodun nasıl kullanıldığını açıklar.

    -toString   -> function toString(): string //*(fonksiyon olduğunu ve string tipinde çıktı verdiği)
    -parseInt   -> function parseInt(string: string, radix?: number | undefined): number  //*(fonksiyon olduğunu ve number tipinde çıktı verdiği)
    -parseFloat -> function parseFloat(string: string): number //*(fonksiyon olduğunu ve number tipinde çıktı verdiği)

    -ortalamaBul (vize1, vize2, final); -> function ortalamaBul(vize1: any, vize2: any, final: any): number 
                                          *(bir fonksiyon olduğunu ve vize1 vize2 ve final adında 3 tane parametre aldığı ve number tipinde çıktı verdiği)

     function ortalamaBul(vize1,vize2,final){
          *kodlar
        return 75;
     }


*    2-) Breakpoint -> kodları milisaniyeler içinde çalıştırmasını engelleyip adım adım çalışmasını sağlamak için kullanılır.
                   *(özellikle hatalı kodları bulmada çok önemli)
                   *anahtar kelime -> debugger;
                  * debugger koyulan yerden itibaren adım adım Source'da kod okunabilir


*/


let a = 5;
debugger;   //? sonraki kısım Source'dan adım adım izlenebilir
let b = 10;
let c = a+b;
let d = a+b+c;
let e = a+b+c+d;
let sonuc = a+b+c+d+e;
console.log(sonuc);


