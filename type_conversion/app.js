/*

*--------TÜR DÖNÜŞÜMLERİ (TYPE CONVERSION)------------

ilkel (primitive) veri tipleri -> string, number, boolean, undefined, null
referans veri tipleri          -> object, function


*/

//? 1-)  string, object -> number

//* Number() - parseInt()-sayılarda veya parseFloat()-sayı ve kesirli sayılarda ile -> window objesi içinde bir fonksiyon

let a = 5;
let b = Number("10");
console.log(typeof b);
console.log(a + b);

let a1 = 8;
let b1 = parseInt("12");
console.log(typeof b1);
console.log(a1 + b1);

let a2 = 8;
let b2 = parseFloat("12.5");
console.log(typeof b2);
console.log(a2 + b2);

let x = Number("A");
console.log(typeof x); //! türünü dönüştürmüş gibi görünür..
console.log(x); //! NaN (not a number) hatası verir..

let rakamlar = Number([0, 1, 3, 4, 5]);
console.log(typeof rakamlar); //! türünü dönüştürmüş gibi görünür..
console.log(rakamlar); //! NaN (not a number) hatası verir..

//? 2-)  number,boolean, object -> string

//* String() - .toString metodu ile 

let a3 = String(55);
console.log(typeof a3);

let a4 = (55).toString();
console.log(typeof a4);

let sonuc = String(true);
console.log(typeof sonuc);

let sayilar = String([0, 1, 3, 4, 5]);
console.log(typeof sayilar);