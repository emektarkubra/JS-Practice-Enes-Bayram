// STRING METOTLARI



// CharAt()         -> string deki karakteri indekse göre alır
// concat()         -> iki ve daha fazla string i birleştirir
// indexof()        -> karakteri ver indeks numarasını al
// lastindexof()    -> indexof ile aynı
// toUpperCase()    -> hepsini büyük harf
// toLowerCase()    -> hepsini küçük harf
// trim()           -> stringe başta ve sondaki boşlukları kaldırır
// slice()          -> dizinin dilimlenmesi (başlangıç ve bitiş indeksi girilir.)
                        //? slice(2,4); -> 2 den başla 4 e kadar al (4 dahil değil)
                        //? slice (2);  -> 2. indekse kadar sil
// substring()      -> slice ile aynı
// replace()        -> iki stringi yer değiştirme ("değiştirilen", "yerineGelen")
// split()          -> string'i diziye çevirir (split(" ") -> boşluğa göre ayır demek)
// valueOf()        -> primitive veri tipine döndürür
// startsWith()     -> string/number ver başlangıç karakter olup olmadığını verir (true/false döner)
// endsWith()       -> string/number ver sondaki karakter olup olmadığını verir (true/false döner)


//CharAt

let kurs = "Modern Web Geliştirme Kursu";

let karakter = kurs.charAt(0);
console.log(karakter);

// concat()

let metin1 = "Hoşgeldiniz";
let metin2 = "Burası Ankara da bulunan en gözde mekandır";

let mix = metin1.concat(" " + metin2);
console.log(mix);

// indexof()

let ramazan = "Hoşgeldin Ya Şehri Ramazan!";
let sonuc = ramazan.indexOf(" ");
console.log(sonuc);

// lastindexof()

let lastIndex = ramazan.lastIndexOf();
console.log(lastIndex);

// toUpperCase()
// toLowerCase()

let buyukHarf = ramazan.toUpperCase();
console.log(buyukHarf);

let kucukHarf = ramazan.toLowerCase();
console.log(kucukHarf);

// trim()

let yazi = "           Merhaba             "
let sonuc1=yazi.trim();
console.log(sonuc1);

// slice()  
// substring()

console.log(ramazan);
let sonuc2 = ramazan.slice(2,3);
console.log(sonuc2);

// replace()
console.log(kurs);
let sonuc3 = kurs.replace("Modern","Güncel");
console.log(sonuc3);

// split()

console.log(kurs);
let sonuc4=kurs.split(" ");
console.log(sonuc4);

// valueOf()

console.log(kurs);
let sonuc5=kurs.valueOf();
console.log(sonuc5);


// startsWith()

console.log(kurs);
let sonuc6=kurs.endsWith("u");
console.log(sonuc6);


// endsWith()