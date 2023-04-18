/*
        *------Switch - Case-------

        *Hangi durum uyuyorsa onun içindeki kodlar çalışır


              switch(deger){

                case : 
                  *kodlar
                break;          //? kırmayı/durdurmayı sağlar. Yazılmazsa alttakileri de yazar.

                case : 
                  *kodlar
                break;

                case : 
                  *kodlar
                break;

                default :     //? hiçbir durum uymuyorsa default kodları çalışır
                  *kodlar
                break;
                
              }


*/


// 1-5 arası sayı seçme

let sayi = prompt("Lütfen 1-5 arasında bir sayı giriniz");    //! burası string

switch(sayi){

  case "1" :          //! o yüzden burasıda string olmalı
    console.log("1 girdiniz.");
  break;

  case "2" :
    console.log("2 girdiniz.");
  break;

  case "3" :
    console.log("3 girdiniz.");
  break;

  case "4" :
    console.log("4 girdiniz.");
  break;

  case "5" :
    console.log("5 girdiniz.");
  break;

  default :
    console.log("Geçerli bir sayı giriniz.")
  break;

}


// günler

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir +
  "2-Salı" + yeniSatir +
  "3-Çarşamba" + yeniSatir +
  "4-Perşembe" + yeniSatir +
  "5-Cuma" + yeniSatir +
  "6-Cumartesi" + yeniSatir +
  "7-Pazar" + yeniSatir +
  "Lütfen bir gün seçiniz.."

let pazartesi = 1,
  salı = 2,
  çarşamba = 3,
  perşembe = 4,
  cuma = 5,
  cumartesi = 6,
  pazar = 7;

let deger = prompt(metin);

switch (deger) {

  case "1":
    console.log("Pazartesi");
    break;

  case "2":
    console.log("Salı");
    break;

  case "3":
    console.log("Çarşamba");
    break;

  case "4":
    console.log("Perşembe");
    break;

  case "5":
    console.log("Cuma");
    break;

  case "6":
    console.log("Cumartesi");
    break;

  case "7":
    console.log("Pazar");
    break;

  default:
    console.log("Geçerli bir gün giriniz!");
    break;

}