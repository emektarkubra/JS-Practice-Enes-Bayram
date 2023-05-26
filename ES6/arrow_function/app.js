//* ECMASCRİPT NEDİR?

/*
    Script dillerinin bir standartıdır.
   
    JavaScript dilinin standartlarını da belirlemektedir.
    Son versiyonu ES6 (2015 den beri)
*/

//----------------------------------------------------------------------------

//* ARROW FUNCTION


yazdirr(); //?bu metot heryerden çağırılabilir

function yazdirr() {
    console.log("Merhaba");
}


//! Parametresiz arrow function


const yazdir = () => {
    console.log("Merhaba");
}

yazdir(); //? function değeri değişkene atanır bu yüzden metot sonra çağırılabilir.


//!Parametreli arrow function

const yazdirrr = (firstName, lastName) => {
    console.log("Merhaba ben", firstName, lastName);
}

yazdirrr("Kübra", "Emektar");


//! Tek satır koddan oluşuyorsa süslü parantez kaldırıp yanına yazılabilir.

const yazdirrrr = (firstName, lastName) => console.log("Merhaba ben", firstName, lastName);


yazdirrrr("Kübra", "Emektar");

//! Tek bir parametreden oluşuyorsa parametrenin parantezini de silebilirsiniz.

const yazdir1 = firstName => {
    console.log("Merhaba", firstName);
}

yazdir1("Kübra");


//! Tek satırlık işle ve return yapıyorsak return de kaldırılabilir

const kupAl = (x) => {
    return x * x * x;
}

console.log("Değer", kupAl(3));


const kupAl1 = x => x * x * x;

console.log("Değer", kupAl1(3));