//*Çarpım Tablosu



for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {                      //? dıştaki 1 kere dönerken içerdeki 10 kere döner,
        console.log(i + "x" + j + "=" + (i * j))    //? içteki döngü bitince dıştakine geçer tekrar içeride 10 kere döner.
    }
    console.log("----------------------")
}

/*

? 2.yol

let i = 0;
while (i < 10) {
    let j = 0;
    while (j < 10) {
        console.log(i + "x" + j + "=" + (i * j));
        j++;
    }
    console.log("--------------")
    i++;
}

*/