/*

*        --------DİZİLER (ARRAY)---------

*        Elemanlar string, number, boolean, null veri tipinde olabilir

*        1-) let diziIsmi = [item1,item2,item3,item4]; //?yerine
*        2-) let diziIsmi = new Array (eleman1,eleman2,eleman3,eleman4);    //? new Array le de dizi oluşturulabilir.  

*                      index        ->    0       1        2      3

*                      diziIsmi[0];   ->   1.eleman
*                      diziIsmi[1];   ->   2.eleman

        ? boş dizi yapıp sonradan da elemanları verilebilir.

        let dizi =[];
        dizi[0]="Enes";
        dizi[1]="Kübra";

        console.log(dizi);

        ? dizi içinde dizi de kullanılabilir.

*/

let rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Ali"];
console.log(rakamlar); //?  dizileri yazdır
console.log(rakamlar[6]); //?  6.indeksteki elemanı yazdır
rakamlar[10] = "Mehmet"; //? içerisindeki eleman değiştirilebilir
console.log(rakamlar[10]);


let isimler = ["Enes", "Kübra", "Bilal", "Yusuf"];
console.log(isimler);
isimler[3] = "Yakup";
console.log(isimler[3]);


let karisikDizi = [1, "Enes", 3.7, true, null, undefined];
console.log(karisikDizi[2]);



// //?   farklı objelerle de array oluşturulabilir..

 

let personel1 = {
    isim : "Kübra",
    soyisim : "Emektar",
    yas : 29,
}

let personel2 = {
    isim : "Zeliha",
    soyisim : "Baykan",
    yas : 31,
}

let rakamlar2 = [0,1,2,3,4,5,6,7,8,9];

let personelArray = [personel1,personel2,rakamlar2];

console.log(personelArray);


//? dizi içinde dizi de kullanılabilir.

let isim = ["Kübra", "Emektar", ["yazılım", "yüzme","okuma"]];


isim[0]="Yusuf";
















