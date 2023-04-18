/* 

?-------VÜCUT KİTLE İNDEKSİ HESAPLAMA--------

Vücut kitle indeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle (kg/m²) hesaplanır.

18, 5 kg/m² ‘nin altındaki sonuçlar: İdeal kilonun altında
18, 5 kg/m² ile 24, 9 kg/m² arasındaki sonuçlar: İdeal kiloda
25 kg/m² ile 29, 9 kg/m² arasındaki sonuçlar: İdeal kilonun üstünde
30 kg/m² ile 39, 9 kg/m² arasındaki sonuçlar: İdeal kilonun çok üstünde (obez)
40 kg/m² üzerindeki sonuçlar: İdeal kilonun çok üstünde (morbid obez)

*/

//1.yöntem

let kilo1 = Number(prompt("Lütfen kilonuzu giriniz:"));
let boy1 = Number(prompt("Lütfen boyunuzu giriniz:"));  
let kitleIndeksi1 = kilo1/(boy1**2);

if(kitleIndeksi1<=18.5){
    alert("İdeal kilonun altında");
}else if (kitleIndeksi1>18.5 && kitleIndeksi1<=24.9){
    alert("İdeal kiloda");
}else if(kitleIndeksi1>=25 && kitleIndeksi1<=29.9){
    alert("İdeal kilonun üstünde")
}else if(kitleIndeksi1>=30 && kitleIndeksi1<=39.9){
    alert("İdeal kilonun çok üstünde -> OBEZ");
}else if (kitleIndeksi1>=40){
    alert("İdeal kilonun çok üstünde -> MORBİD OBEZ")
}


// 2.yöntem

let kilo2 = Number(prompt("Lütfen kilonuzu giriniz:"));
let boy2 = Number(prompt("Lütfen boyunuzu giriniz:"));
let kitleIndeksi2 = kilo2/(boy2**2);

kontrolEtme(kilo2,boy2);

function kontrolEtme(kilo2,boy2){
    if(kilo2 =="" || boy2==""){
        alert("Lütfen kilo ve boyunuzu giriniz!");
        return;
    }else {
        if(kitleIndeksi2<=18.5){
            alert("İdeal kilonun altında");
        }else if (kitleIndeksi2>18.5 && kitleIndeksi2<=24.9){
            alert("İdeal kiloda");
        }else if(kitleIndeksi2>=25 && kitleIndeksi2<=29.9){
            alert("İdeal kilonun üstünde")
        }else if(kitleIndeksi2>=30 && kitleIndeksi2<=39.9){
            alert("İdeal kilonun çok üstünde -> OBEZ");
        }else if (kitleIndeksi2>=40) {
            alert("İdeal kilonun çok üstünde -> MORBİD OBEZ")
        }   
    }
}


