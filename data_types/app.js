/*

?       Veri Tipleri

?       İlkel Veri Tipleri (primitive)

        1-) String ->  harf yada sayı içeren dizeler (tırnak içinde yazılır)

            let isim = "Kübra";  
            console.log(typeof isim);

        2-) Number -> sayı          //? başka programlama dillerinde sayılar int 
                                      ? kesirli sayılar ise double/float tipinde görülür, ancak JS'de hepsi number
            let sayi1 =10;
            console.log(sayi1);

                !Dikkat

                let a= 10;
                let b= 5;
                console.log(a+b); //* ikiside number olduğu için toplar.

                let a="10";
                let b="5";
                console.log(a+b);  //* ikiside string olduğu için yanyana yazar.

                let stringDegisken = "Yaşınız : ";
                let yass = 25;
                console.log(stringDegisken+yass);  //* biri string ve biri number olduğunda yanyana yazar. 

        3-) Boolean -> true/false

            console.log(5<10);  //* true

            let a=3;
            let b=12;
            let sonuc=a+b;
            console.log(sonuc<13);  //*  false


        4-) Null -> boş (önce boş bırakılıp sonradan bir değer ataması yapılabilir)

            let a = null;
            a=5;             //* sonradan atanan değer
            console.log(a);
       

        5-) Undefined -> tanımlanmamış (herhangi bir değer verilmemiş)

            let a;         //* değer verilmemiş
            console.log(a);       

?       Referans Veri Tipleri 

        6-) Object -> bu sefer değişkende süslü parantez açılır. (array'de bir objedir)

           * süslü parantez : object
           * kutu parantez : array-diziler (object)


            let insan = {
                isim : "Kübra",
                soyisim : "Emektar",
                yas : 25,
            };
            console.log(insan);

            let rakamlar = [1,2,3,4,5];    //* array  
            console.log(rakamlar);

        7-) Function

            let func = function (){ 
                console.log(func);  
            }
            func();     //* fonksiyonu çalıştırmak için

*                    ya da

            function selamVer (){
                console.log("Selam");
            }
            selamVer();


            *Veri tipini görmek için;

            *let isim = "Kübra"; 
            *console.log(typeof isim);  

*/

//* string
let isim = "Kübra";  
console.log(typeof isim);


//* number
let sayi1 =10;  
console.log(sayi1);
console.log(typeof sayi1); 

let yas =23;
console.log("Yaşınız: "+ yas);

let stringDegisken = "Yaşınız : ";
let yass = 25;
console.log(stringDegisken+yass);

//* boolean
console.log(5<10);  //* true

let a=3;
let b=12;
let sonuc=a+b;
console.log(sonuc<13);  //* false

//* null

let x = null;
x=5;     //* sonradan değer atama yapılabilir
console.log(x);


//* undefined 

let y;  //* değer verilmemiş
console.log(y);


//* object

let insan = {
    isim : "Kübra",
    soyisim : "Emektar",
    yas : 25,
}
console.log(insan);
console.log(typeof insan);

let rakamlar = [1,2,3,4,5];  //* array (diziler)'de bir object  
console.log(rakamlar);


//* function

let func = function (){
    console.log(func);
}
func();

function selamVer (){
    console.log("Selam");
}
selamVer();
