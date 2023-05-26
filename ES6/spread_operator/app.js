//* SPREAD OPERATÖRÜ  ...
//Array deki değerleri başka yere aktarmayı sağlıyor

let array = [10, 20, 30, 40];

function add(a, b, c, d) {
    console.log(a, b, c, d);
}

add(...array); //? 3 nokta ile array'in değerleri dağıtılabilir.

//------------------------------------------------------------------

const diller1 = ["Java", "C#"];
const diller2 = ["Php", "Pyhton", ...diller1];

console.log(diller2);

//-------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, ...kalanSayilar] = numbers; //? kalan sayılar ayrı bir dizinin içersine konulabilir

console.log(a, b, kalanSayilar);


//-------------------------------------------------------------------

let array1 = ["Azra", "Zeliha", "Yusuf", "Kübra"];


let array2 = [...array1];
console.log(array2);

//-------------------------------------------------------------------

