//* Map Kullanımı ------> key (anahtar), value (değer)


const map1 = new Map();
//değer atamak için -> map.set(key,value)
map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(06, "Ankara");
map1.set(01, "Adana");

console.log(map1);

//değer almak için -> map.get (key)

console.log(map1.get(35));

// size -> map.size

console.log(map1.size);

// silmek -> delete(key)

map1.delete(01);
console.log(map1);

// değer sorgulama -> has

console.log(map1.has(34));

// map üzerinde dönme (for of loop ile)

for (const value of map1) {
    console.log(value) //? dizi şeklinde döner
}

for (let [key, value] of map1) {
    console.log(key, value); //? kendi veri tipinde döner
}


// keys() metodu ile dönmek

const key = Array.from(map1.keys());
console.log(key); // değerler array değil 

key.forEach((key) => {
    console.log(key, map1.get(key));
})


for (let keys of map1.keys()) {
    console.log(keys);
}

for (let values of map1.values()) {
    console.log(values);
}


// map den arraye çevirme

let array = Array.from(map1);
console.log(array); //? array in içinde array oluşur

array.forEach((eleman) => {
    console.log(eleman);
})

// array den map e çevirme

const array2 = [
    [34, "İstanbul"],
    [35, "İzmir"],
    [06, "Ankara"],
    [01, "Adana"]
];

const map2 = new Map(array2);
console.log(map2);


//! eğer key bir referans tip ise direk onu çağıramazsınız önce değişkenle tanımlanmalıdır. Çünkü RAM de heap bölümünde