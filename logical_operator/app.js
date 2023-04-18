/*
        -------MANTIKSAL OPERATÖRLER--------

        &&  :  ve
        ||  :  veya
        !   :  değil

*       1-) &&  (ve)

          true  && true  -> true
          true  && false -> false
          false && true  -> false
          false && false -> false

*       2-) ||  (veya)

          true  || true  -> true
          true  || false -> true
          false || true  -> true
          false || false -> false

*       3-) !  (tersini almak)


*/


// Yaşınız 18 den büyükse VE 3000 TL paran varsa VE sağlığınız yerindeyse;

let yas = 20;
let para = 3500;        
let saglikliMi = false;
let hakSayisi = 3;

console.log(yas>18 && para>=3000 && saglikliMi==true);  // false

console.log(5>3 || 2<3);  // true

console.log (!(5>3));  // true -> false

console.log((para>3000 && hakSayisi>1 ) || (yas>18 && saglikliMi)); // true || false -> true