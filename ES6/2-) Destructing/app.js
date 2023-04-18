//* Destructing Kullanımı


//! DİZİLERDE

//* tek tek dizide değerleri yazmak yerine destructing yapılabilir

let langs = ["C#", "C++", "JavaScript", "Phtyon"];

let [lang1, lang2, lang3, lang4] = langs; //? langs deki indeks numaralarındaki değerleri soldaki kısma teker teker atar

console.log(lang1, lang2, lang3, lang4);


//ÖRNEK


const hesapla = (a, b) => {
    const toplam = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;
    let dizi = [toplam, cikar, carp, bol];
    return dizi;
}

let [t, ck, cp, b] = hesapla(10, 2);

console.log(t, ck, cp, b);


//! OBJELERDE

const person = {
    firstName: "Kübra",
    lastName: "Emektar",
    salary: 20000,
    age: 30,
}

// let isim = person.firstName;
// let soyIsim = person.lastName;
// let maas = person.salary;
// let yas = person.age;
// console.log(isim, soyIsim, maas, yas);

let {firstName, lastName, salary, age} = person;
console.log(firstName, lastName, salary, age);

// farklı isimle yakalamak istiyorsak

let {firstName:isim, lastName:soyIsim, salary:maas, age:yas} = person;
console.log(isim, soyIsim, maas, yas);
