//* For of Döngüleri - dizinin elemanlarını döner

let names = ["Azra", "Zeliha", "Yusuf", "Kübra"];
for (const name of names) {
    console.log(name, names.indexOf(name));
}


//* For in Döngüleri - dizinin indeks numaralarını döner

let isimler = ["Azra", "Zeliha", "Yusuf", "Kübra"];

for (const isim in isimler) {
    console.log(isimler[isim]);
}