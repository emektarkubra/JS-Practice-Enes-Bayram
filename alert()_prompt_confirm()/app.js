/*
    *       --------DİYALOG KUTULARI---------

    *window objesi içinde fonksiyonlardır ancak window içerisindeki özelliklerin başına window. konması gerekmez

    1-) alert     : uyarı kutucuğu-bilgilendirme yapar    
                    alert("mesaj");

    2-) prompt    : kullanıcının değer girmesini sağlar (kullanıcıdan alınan değerler her zaman string'dir)   
                    let degiskenIsmi=prompt("mesaj");

    3-) confirm   : onay kutusu                           
                    confirm("mesaj");

*/


alert("İşleminize devam etmeden önce kaydetmelisiniz!");

let isim= prompt("Lütfen isminizi giriniz: ");
let yas = prompt("Lütfen yaşınızı giriniz: ");

console.log("İsminiz: " + isim);
console.log("Yaşınız: " + yas);

let sonuc = confirm("Sayfadan çıkmak istediğinize emin misiniz ? ");
console.log(sonuc);


