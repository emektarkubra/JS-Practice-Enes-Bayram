/*
    *DOM (DOCUMENT OBJECT MODEL)

        HTML dökümanları içerisinde bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde işlemler yapabilmek için tasarlanan bir modeldir. 
        DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.
        HTML dosyasında bulunan bütün öğeler, DOM üzerinde bir nesne olarak görülür. DOM modelin ismi, document ise bu nesnelerin kapsayıcısıdır.

*/

//*Document Objesi

let value;

// value = document.location.href;      //? URL'sini           - http://127.0.0.1:5500/39-)%20DOM%20(Document%20Object%20Model)%20Nedir/index.html
// value = document.location.hostname   //? URL host        - 127.0.0.1
// value = document.location.port       //? URL portu       - 5500/39
// value=document.location.pathname     //? URL path.       - %20DOM%20(Document%20Object%20Model)%20Nedir/index.html
// value =document.contentType;         //? içerik tipini   - text/html

// value = document.characterSet;       //? Karakter seti   - UTF-8
// value=document.title;                //? title alınır

// value = document.links;              //? linkleri
// value = document.links.item(4);      //? 4.linkin elementini verir (indisler 0 1 2 3 diye sayılır.)
// value = document.links.item(4).id;   //? 4.linkin elementini verir

// value = document.links.item(4).getAttribute("class"); //? Linklerin 4. elementinin class attribute unu verir
// value = document.links.item(4).getAttribute("id");    //? Linklerin 4. elementinin id attribute unu verir
// value = document.links.item(4).classList[3];          //? Linklerin 4. elementinin class larının 3.indeksindekini verir
// value=document.forms;                                 //? formları verir
// value=document.forms.item(1);                         //? formların 1.elementini verir.
// value= document.forms.item(1).method;                 //? formların 1.elementinin metodunu verir
// value=document.forms.item(1).id;                      //? formların 1.elementinin id si
// value=document.forms.item(1).name;                    //? formların 1.elementinin name i
// value=document.forms.item(1).children;                //? çocuklarını getirir (içindeki elemenetler)

console.log(value);