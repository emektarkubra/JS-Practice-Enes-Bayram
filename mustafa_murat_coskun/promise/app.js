//* PROMISE

//? Gerçek hayat örneği
// Örneğin bilgisayarımız bozuldu ve tamir için bilgisayarcıya götürdük. Yani bilgisayarcıya bir istekte bulunduk
// Bilgisayarcı ise ben size haber vericem der. Burada biz Pending durumuna (yani bekleme) geçeriz.
// Bize olumlu ya da olumsuz bir dönüş yapar

//? Örnek
// Programımız bir kodu var ve biz Rest API'a veri alma isteğinde (function) bulunuyoruz
// İlk durumda - PENDING durumunda
// Function ise kendi içinde promise objesi oluşturuyor
// İstek atıldığı için Promise içinde 2 değer önemli oluyor

//* İlk adımda
// - state : pending 
// - value : undefined 

//* Olumlu dönüş - resolve (..)       - then fonksiyonu ile yakalarız
//  - state : resolved
//  - value : ..

//* Olumsuz dönüş - reject("error")   - catch fonksiyonu ile yakalarız
//  - state : rejected
//  - value : error


// Yani resolve ile olumlu sonuç döndürebiliyoruz, reject ile olumsuz sonucu döndürebiliyoruz

// --------------- olumlu sonuç------------------------

function getData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Olumlu sonuç");
        }, 10000) //? 10 saniye state durumu pending olurken sonra resolved olur
    })
    return promise;
}

getData("Merhaba").then((response) => {
    console.log(response);
})

//----------------olumsuz sonuç-------------------------

function getData1(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Olumsuz sonuç");
        }, 5000);
    });

    return promise;
}

getData1("Merhaba").catch((err) => {
    console.log(err);
})

//----------ÖRNEK-------------------

function getData3(data) {

    let promise = new Promise((resolve, reject) => {

        if (typeof data === "string") {
            resolve(data);
        } else {
            reject("Lütfen string bir değer giriniz."); // new Error("Lütfen string bir değer giriniz.") -> gerçek bir error gibi gösterecek
        }
    })

    return promise;
}

getData3(24)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err); // console.error(err) -> gerçek bir hata gibi kırmızı yazar
    })

//-------------ÖRNEK--------------------

function addTwo(number) {
    let promise = new Promise((resolve, reject) => {
        if (typeof number === "number") {
            resolve(number + 2);
        } else {
            reject(new Error("Lütfen bir sayı giriniz"));
        }
    })
    return promise;
}

addTwo(2)
    .then((response) => {
        console.log(response);
        return response + 2; // then içinde return yapıldığı için tekrar promise döner tekrar then le yakalanır
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    })

// Birden fazla then kullanılabilir ancak catch 1 defa kullanılır