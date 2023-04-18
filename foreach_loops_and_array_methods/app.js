// For Each Döngüsü - Dizilerde kullanılır.



let isimler = ["Azra", "Zeliha", "Yusuf", "Kübra"];

isimler.forEach(function (isim) {
    console.log(isim); //? Önce 0.indeksi alıyor isim içine koyuyor yazdırıyor,
}); //? sonra tekrar dönüyo 1. indeksi alıp koyuyor




for (let i = 0; i < isimler.length; i++) {
    console.log(isimler[i]);
}

let j = 0;
while (j < isimler.length) {
    console.log(isimler[j]);
    j++;
}


//!DİKKAT   ->      Tooltip'i oku, metotlarda return olarak verilenler başka değişkeble tutulur


// .push()  ->   dizinin sonuna eleman ekler, uzunluğunu döner

let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let diziUzunluk = arabalar.push("opel"); //? dönen değerler başka değişkenle yakalanabilir
console.log(arabalar);
console.log(diziUzunluk);

// .unshift()  ->   dizinin başına eleman ekler, uzunluğunu döner

let uzunluk = arabalar.unshift("hundai");
console.log(uzunluk);
console.log(arabalar);

// .pop()   ->  sondaki elemanı siler, silinen elemanı döner

let silinenEleman = arabalar.pop();
console.log(silinenEleman);
console.log(arabalar);

// .shift()   ->  baştaki elemanı siler, silinen elemanı döner

let silinen = arabalar.shift();
console.log(arabalar);
console.log(silinen);

// .splice(index,index,item)   ->  istediğin yere eleman ekleme ve silmek için  


let silinenElemann = arabalar.splice(2, 0, "hundai"); //? 2.index den başla eleman silme, item'ı ekle
console.log(arabalar);
console.log(silinenElemann);

// .toString   ->  diziyi stringe çevirmek için-string'i geri döndüğü için başka değişkenle tutulur

let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);

// .join("seperatör")     -> diziyi string çevirir ve farkı eleman arasına ekleme yapabilirsin -string'i geri döndüğü için başka değişkenle tutulur

let stringArabalarr = arabalar.join("-");
console.log(stringArabalarr);

// .concat()    -> dizileri birleştirmek için

let names = ["Azra", "Zeliha", "Yusuf", "Kübra"];
let ages = [1987, 1991, 1993, 1993];
let mix = names.concat(ages);
console.log(mix);

// .slice()    -> dizileri istenilen yerden bölüp yeni dizi oluşturmak için

let arabalarr = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalarr);
let slicedArabalar = arabalarr.slice(1, 3); //? 2.indexten başla 3'e kadar elemet al (3 dahil değil)
console.log(slicedArabalar);

//? arabalarr.slice(2);   ->   2.indeksten başla al
//? arabalarr.slice(-2) ->    sondan başla 2 elementi al

// .reverse()  -> diziyi ters çevirmek

let arabalar2 = ["bmw", "toyota", "renault", "mercedes", "porsche"];
console.log(arabalar2);
arabalar2.reverse();
console.log(arabalar2);

// .split()  -> dizi olmayan değişken değerlerini belli bir seperatore (symbol) göre bölüp yeni bir dizi oluşturmak

let isimler2 = "Azra,Zeliha, Yusuf, Kübra";
let splitedIsimler = isimler2.split(","); //? sperator'e göre bölerek dizi oluşturur
console.log(splitedIsimler);

// .indexOf()   -> elemanın index numarasını verir. Eğer dizi elemanı içermiyorsa  -1 verir

let arabalar3 = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let indexNumber = arabalar3.indexOf("renault");
console.log(indexNumber);


// .includes()    -> verilen elemanı dizinin içerip içermediği - true/false

let arabalar4 = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let varMi = arabalar4.includes("toyota");
console.log(varMi);
