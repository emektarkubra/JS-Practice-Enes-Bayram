// SET

// dizilere alternatif bir dizi çeşidi
// map ile herşeyi aynı
// Set te değer sadece bir kere tutulabilir yani bir değer yalnızca bir kere tanımlanabiliyor
// key- value YOK - aynı dizilerdeki gibi tek değer alır 

const set = new Set();


//değer atamak -> set.add()

set.add(true);
set.add(3.14);
set.add("Kübra");    // bu değeri sadece 1 tane tutar
set.add("Kübra");
set.add("Kübra");
set.add("Kübra");
set.add(1);
set.add({userName:"kübra", password:"10"});
set.add([1,2,3,4,5]);

console.log(set);

// eleman sayısı bulma -> set.size

console.log(set.size);

// değer silmek -> set.delete()

set.delete(1);
console.log(set.size);

set.delete([1,2,3,4,5]);  //! silinmez çünkü referans tiptir, önce değişkenle tanımşanıp değişken üzerinden silinebilir


// değer sorgulamak -> set.has()

console.log(set.has("Kübra"));

// for of döngüsü ile dönmek

for (let value of set){
    console.log(value);
}

//forEach le dönmek

set.forEach(value => console.log(value));

// Set -> Array dönüşümü

let array = Array.from(set);
console.log(array);

// Array -> Set dönüşümü

let myArray = [1,2,3,true,"Kübra"];

let mySet = new Set(myArray);
console.log(mySet)


