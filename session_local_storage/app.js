//* Session/Local Storage Kullanımı

// Inspect -> Application kısmında bulunur.
// Browser'ın depolama alanıdır.
// Key-Value vardır. 
// Window objesinin içindedir.

// Session storage daki veriler tarayıcıyı, bilgisayarı kapatınca silinir
// Local storage de SİLİNMEZ

//! Session Storage

//* Değer ekleme

sessionStorage.setItem("350", "Kübra");
sessionStorage.setItem("125", "Yusuf");
sessionStorage.setItem("353", "Zeliha");
sessionStorage.setItem(432, 46); //? her zaman string tipinde olur

//* Değer silme

sessionStorage.removeItem("350");

//* İçerisinden değer almak

let value = sessionStorage.getItem("125");
console.log(value);

//* Hepsini silme

sessionStorage.clear();

//* Array depolayıp array geri almak (string yerine)

let names = ["Azra", "Zeliha", "Yusuf", "Kübra"];

sessionStorage.setItem("names", JSON.stringify(names)); //? array olarak storage a göndermek

let array = JSON.parse(sessionStorage.getItem("names")); //? array olarak geri almak
console.log(array);

//! Local Storage aynısı


