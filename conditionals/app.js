/*
*        -------------KOSUL YAPILARI--------

*   1-)  2 koşul var, birini çalıştırır

         if (kosul){         
            kodlar
         }else{      //? hiçbiri değilse
            kodlar
         }


*   2-)  2'den fazla koşul var, birini çalıştırır
      
         if(koşul){           
            kodlar
         }else if(koşul){
            kodlar
         }else if {
            kodlar
         }else {    //? hiçbiri değilse
            kodlar
         }

*   3-)  fazla koşuk var ancak koşul sağlayanların hepsini çalıştırır

         if(koşul){        
            kodlar
         }
         if(koşul){
            kodlar
         }
         if(koşul){
            kodlar
         }


*/

let not = 65;
if (not>50){
   console.log("Geçtiniz, " + not)
}else {
   console.log("Kaldınız, " + not)  // sadece if ile oluşturulabilir ancak sadece else ile oluşturulamaz
}


// EHLİYET SINAVI PRACTICE

let yas = Number(prompt("Yaşınız: "));   //pop-up çıktısı string olduğu için ve sayı ile kıyaslanacağı için number'a çevrildi
let para =Number(prompt("Paranız: "));
if(yas>=18 && para>3000){
   alert("Ehliyet sınavına katılabilirsiniz..")
}else{
   alert("Ehliyet sınavına katılamazsınız..")
}


// ORTALAMA HESAPLAMA PRACTICE



let vize1 = Number( prompt("Vize 1 notunuzu giriniz: ")); 
let vize2 = Number( prompt("Vize 2 notunuzu giriniz: "));
let final = Number( prompt("Final notunuzu giriniz: "));
let ortalama = (vize1*0.3 + vize2*0.3 + final*0.4);
if(ortalama>=60){
   alert("Tebrikler.. Geçtiniz, notunuz: " + ortalama)
}else {
   alert("Üzgünüz.. Kaldınız, notunuz: " + ortalama)
}


// YOL UYGULAMASI

/*

-              -              -
 -             -             -
  -            -            -
   -           -           -
    -          -          -
  1.yol      2.yol      3.yol

*/

let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz!");
if(secilenYol == 1){
   alert("Seçtiğiniz yol " + secilenYol + ". yoldur.")
}else if(secilenYol == 2){
   alert("Seçtiğiniz yol " + secilenYol + ". yoldur.")
}else if (secilenYol == 3){
   alert("Seçtiğiniz yol " + secilenYol +". yoldur.")
}else {
   alert("Lütfen geçerli bir yol seçiniz!")
}


// Çoklu if yapısı


// Adı boş geçilemez ve tckn 11 haneli olacak
         

let isim = prompt ("Lütfen adınızı giriniz: ");
if(isim != ""){
   let tckn = prompt ("Lütfen tc kimlik numaranızı giriniz: ");
   if (tckn.length == 11 ){    //! .lenght harf veya sayı uzunluğunu verir
      console.log("Başarılı");
   }else{
      console.log("Tc kimlik numarası 11 haneli olmalıdır!");
   }
}else{
   console.log("İsim boş geçilemez!");
}



//! ya da



let isimm = prompt("Lütfen isim giriniz: ");
let tckn = prompt("Lütfen tc kimlik numaranızı giriniz: ");

kontrolEt(isimm, tckn);

function kontrolEt (isimm, tckn ){
   
   if(isimm == ""){
      console.log("Lütfen ismi boş bırakmayınız!")
      return;
   }
   
   if(tckn.lenght != 11){
      console.log("Lütfen tc kimlik numaranızı 11 haneli giriniz!")   
      return;
   }

   console.log("Başarılı");  //! ikiside başarılıysa yazar
}

isim.length



