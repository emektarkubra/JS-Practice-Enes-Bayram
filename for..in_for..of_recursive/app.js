//? for in döngüsü

let array = ["Mehmet", "Elbeyli", "WebTasarım", "Programlama", "Ders11"];

for (let element in array) {
    console.log(element); // indisleri yazar
}

for (let element in array) {
    console.log(array[element]); // elemanları yazar
}

for (let element in array) {
    console.log(element + array[element]); // hem indis hem elemanları yazar
}

// //? for of döngüsü

for (let element of array) {
    console.log(element); // direk elemanları yazar
}


//? Recursive function
//Recursive function : Kendi içerisinde kendisini çağıran/tetikleyen fonksiyonlardır
//Tekrarlamalı/Özyinelemeli
//Öngörülemeyen, derinliği tahmin edilemeyen, donu bilinmeyen durumlarda kullanılır
//Döngülerin kullanıldığı her yerde recursive kullanılabilir ancak recursive in kullanıldığı heryerde döngüler kullanılamaz..


recursive();

function recursive() {
    console.log("Merhaba");
    recursive();
}

recursive();

function recursive(a = 1) { // 3 tane yazdırıldı

    console.log("Merhaba");
    if (a < 3) {
        recursive(++a);
    }

}

recursive();

function recursive(a = 1) { // 3 tane yazdırıldı

    console.log("Merhaba");
    if (a < 3) {
        recursive(++a);
    }
    console.log("Dünya");

}

//! recursive ile factorial yazdırma


let nums = prompt("Bir sayı girin")

function factorial(nums) {

    if (nums == 0) {
        return 1;
    } else {
        return nums * factorial(nums - 1);
    }
}

console.log(factorial(nums));