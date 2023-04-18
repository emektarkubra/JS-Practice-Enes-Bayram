// // DATE (Tarih) Kullanımı  -> Window objesi içinde obje

// //şuanki tarih ve saat

// let tarih = new Date();
// console.log(tarih);

// //başka tarih ve saat

// let tarih2 = new Date(1993,06,12,16,34,15);
// console.log(tarih2);

// // get metotları -değer almak için


// console.log(tarih.getDate()); // ayın kaçıncı günü

// console.log(tarih.getDay());  // haftanın kaçıncı günü

// console.log(tarih.getFullYear()); // yılı verir

// console.log(tarih.getHours());  // saati verir 

// console.log(tarih.getMilliseconds()); // saniyeyi verir

// console.log(tarih.getMinutes()); // dakikayı verir

// console.log(tarih.getMonth()); // ayı verir (aylar 0 dan başlıyo)

// console.log(tarih.getSeconds()); //saniyeyi verir

// console.log(tarih.getTime());  // milisaniyelerle zamanı verir



// console.log(tarih.toLocaleDateString()); // gün.ay.yıl

// console.log(tarih.toLocaleTimeString()); // saat.dakika.saniye

// console.log(tarih.toLocaleString());   // gün.ay.yıl saat.dakika.saniye



// // set metotları - yeni değer vermek için

// console.log(tarih);
// tarih.setDate(28)       // ayın kaçıncı günde olduğunu değiştirmek 
// console.log(tarih);

// tarih.setFullYear()     // yılı değiştirmek

// tarih.setHours()        // saati değiştirmek

// tarih.setMilliseconds() // milisaniyeyi değiştirmek

// tarih.setMinutes()      // dakikayı değiştirmek

// tarih.setMonth()        // ayı değiştirmek (aylar 0 dan başlıyo)

// tarih.setSeconds()      //saniyeyi değiştirmek

// tarih.setTime ()        // toplam zamanın milisaniyelerini değiştirmek



// //? ŞUANKİ SAATİN ÜZERİNE DE 2 SAAT EKLEME



// tarih.setHours(tarih.getHours()+2);

// console.log(tarih);



// tarih.toString()        // tarihi stringe çevirir   





//setInterval

function saatiGoster() {
    let tarih = new Date();
    let hour = tarih.getHours;
    let minute = tarih.getMinutes;
    let second = tarih.getSeconds;
    console.log(hour + ":" + minute + ":" + second);

}

saatiGoster();