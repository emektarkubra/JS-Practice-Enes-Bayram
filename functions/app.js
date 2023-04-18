/*
                         *-------------METOTLAR---------------

        * Metotlar yazılan kodu başka yerlerde de kod tekrarı (copy-paste) olmadan çağırmamızı sağlar
        * parantez varsa o metottur.. parseInt (),parseFloat(), kontrolEt(yas), toString()

*       1-) Parametresiz ve geriye değer döndürmeyen metotlar

        function methodİsmi(){ 
            *kodlar
        }
        
        methodİsmi();      //? metot çalıştırılır



*       2-) Parametreli metotlar

        function methodİsmi(parametre1,parametre2){ 
            *kodlar
        }
        
        methodİsmi(parametre1,parametre2);      //? metot çalıştırılır


*       3-) Geriye değer döndüren metot (return) -> 

        * bir değeri metodun dışarısına çıkarmak için
        * metodu bitiren anahtar kelimedir. Yani return'den sonraki kodlar çalışmaz
        * void: geriye döndürmeyenler 

        cube(3);
        function cube(sayi){
            let sonuc = sayi*sayi*sayi;
        }

        console.log(sonuc);   //? sonuca dışarıdan erişilemez bu yüzden return anahtar kelimesi ile metodun çağırıldığı yere geri döndürme yapılır



    
        let geriDönenDeger=cube(3);
        console.log(geriDönenDeger);

        function cube(sayi){
            let sonuc = sayi*sayi*sayi;
            return sonuc;                 //?sonuc return ile metodun çağırıldığı yere döndürülür ve başka bir değişkenle tutulur.
            
        }



        
    */


//* parametresiz


function yazdir1() {
    console.log("Kübra");
}
yazdir1();
yazdir1();


function toplama() {
    let sayi1 = Number(prompt("Lütfen birinci sayıyı giriniz.."));
    let sayi2 = Number(prompt("Lütfen ikinci sayıyı giriniz.."));
    alert("Toplam: " + (sayi1 + sayi2));
}
toplama();


//* parametreli


function fullname(isim, soyisim) {
    console.log(isim + " " + soyisim)
}

fullname("Kübra", "Emektar");
fullname("Yusuf", "Emektar");




function cube(sayi) {
    console.log(sayi * sayi * sayi);
}

cube(3);
cube(5);


let yas = prompt("Lütfen yaşınızı giriniz..");

function kontrolEt(yas) {
    if (yas >= 18) {
        console.log("Ehliyet alabilirsiniz!");
    } else {
        console.log("Ehliyet alamazsınız!");
    }
}

kontrolEt(yas);


//*   geriye dönen değer


let geriDönenDeger = cube(3);
console.log(geriDönenDeger);

function cube(sayi) {
    let sonuc = sayi * sayi * sayi;
    return sonuc;

}


let deger = kareAl(3);
console.log(deger);

function kareAl(sayi) {
    let sonuc = sayi * sayi;
    return sonuc;
}
