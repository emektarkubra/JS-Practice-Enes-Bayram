// MÜKEMMEL SAYI UYGULAMASI

// pozitif tam sayıların pozitif bölenleri toplamı, sayının kendisinin iki katına eşittir. 

// 6 - 28 - 496



//? Return ile döndürerek

let sayi = prompt("Lütfen bir sayı giriniz..");

let sonuc = bul(sayi);

if (sonuc == (sayi*2)) {
    alert("Mükemmel sayıdır");
} else {
    alert("Değildir")
}

function bul(sayi) {
    let toplam = 0;
    for (i = 0; i <= sayi; i++) {
        if (sayi % i == 0) {
            toplam += i;
        }
    }
    return toplam;

}


/*
? Döndürülmeden

let sayi = prompt("Lütfen bir sayı giriniz..");

bul(sayi);

function bul(sayi) {
    let toplam = 0;
    for (i = 0; i <= sayi; i++) {
        if (sayi % i == 0) {
            toplam += i;
        }
    }
    if (toplam == (sayi*2)) {
        alert("Mükemmel sayıdır");
    } else {
        alert("Değildir")
    }

}

*/