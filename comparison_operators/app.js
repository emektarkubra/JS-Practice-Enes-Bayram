/*
        -------KARŞILAŞTIRMA OPERATÖRLERİ--------

            
        =       -> sağdaki değeri al diğer taraftaki değişkenin içerisine koy    KARŞILAŞTIRMA
        ==      -> eşittir (değer olarak)
        ===     -> eşittir (hem değer hem tip olarak)
        !=      -> eşit değil (değer olarak)
        !==     -> eşit değil (hem değer hem tip olarak)
        >       -> büyük mü
        <       -> küçük mğ
        >=      -> büyük eşit mi
        <=      -> küçük eşit mi

  */

//*   =

let sayi = 5;           //*  Anlamı 5 değerini al diğer taraftaki değişkenin içerisine koy demek.
console.log(sayi);
let isim = "Kübra";     //* Kübra değerini al diğer taraftaki değişkenin içerisine koy demek.
console.log(isim);


//*   ==   -> sadece değer olarak eşittir

console.log(5==5);

let a = 5;
let b = 15;
let sonuc = a+b;
console.log(sonuc==11); //false

console.log(3=="3");  //* true

//*   ===   -> hem değer hem tipi eşittir.

console.log(5===5); //true
console.log (5==="5"); //false-tipler farklı 

//*  !=     -> eşit değil

console.log(5!=5); //false
console.log(5!=3); // true

let yas=23;
console.log(yas!=25); //true

//*  !==     -> hem değer hem tip olarak eşit değil

console.log(10!=="10"); //true
console.log(10!=="5");  //true

//*  > / < / >= / <=      -> büyüktür / küçüktür / büyük eşittir / küçük eşittir

console.log(15>12); //true
console.log(15<12); //false
console.log(12<=12); //true
console.log(12>=10); //true


