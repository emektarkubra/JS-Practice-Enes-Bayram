/* 
       ?--------BENZİN İSTASYONU--------

        1-Dizel     : 24.53
        2-Benzin    : 22.25
        3-LPG       : 11.1

        Gelen müşteriden alacağımız bilgiler

        1-Yakıt tipi
        2-Yüklenecek yakıt litresi

*/

// let yakitTipi = Number(prompt("Lütfen yakıt tipini seçiniz"));
// let yakitLitresi = Number(prompt("Lütfen yüklenecek yakıt litresini seçiniz"));

// if (yakitTipi == 1){
//     console.log(24.53*yakitLitresi);
// }else if(yakitTipi == 2){
//     console.log(22.25*yakitLitresi);
// }else if(yakitTipi == 3){
//     console.log(11.1*yakitLitresi);
// }else{
//     console.log("Geçerli bir yakıt tipi seçiniz");
// }


  
/* 
        --------BENZİN İSTASYONU--------

        1-Dizel     : 24.53
        2-Benzin    : 22.25
        3-LPG       : 11.1

        Gelen müşteriden alacağımız bilgiler

        1-Yakıt tipi
        2-Yüklenecek yakıt litresi
        3-bakiye

*/

let dizel = 24.53, benzin = 22.25, lpg = 11.1;
let yeniSatir = "\r\n";
let yakitTipi = "1-Dizel" + yeniSatir
               +"2-Benzin" + yeniSatir
               +"3-LPG"+ yeniSatir
               +"Lütfen yakıt tipini seçiniz.."

Number(prompt(yakitTipi));
let yakitLitresi = Number(prompt("Lütfen yüklenecek yakıt litresini giriniz.."));
let bakiye = Number(prompt("Lütfen bakiyenizi giriniz.."));

if (yakitTipi == 1){
    let ödenecekTutar1 = dizel*yakitLitresi;
    if(bakiye>=ödenecekTutar1){
        console.log("Ödenecek Tutar= " + ödenecekTutar1);
    }else {
        console.log ("Bakiyeniz yetmemektedir.");
    }
}else if (yakitTipi == 2){
    let ödenecekTutar2 = benzin*yakitLitresi;
    if(bakiye>=ödenecekTutar2){
        console.log("Ödenecek Tutar= " + ödenecekTutar2);
    }else {
        console.log ("Bakiyeniz yetmemektedir.");
    }
}else if (yakitTipi == 3){
    let ödenecekTutar3 = lpg*yakitLitresi;
    if(bakiye>=ödenecekTutar3){
        console.log("Ödenecek Tutar= " + ödenecekTutar3);
    }else {
        console.log ("Bakiyeniz yetmemektedir.");
    }
}else {
    alert("Geçerli bir yakıt tipi seçiniz!");
}

