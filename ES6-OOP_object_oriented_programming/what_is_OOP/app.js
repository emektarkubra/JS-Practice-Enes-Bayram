//* OOP (Object Oriented Programming)-Nesneye Yönelik Programlama

// Gerçek hayatta gördüğümüz birçok nesnenin bilgisayar ortamına aktarılma şeklidir.


class Insan { //* insan sınıfı oluşturuldu

    /*
        1- Özellikler
        2- Yapıcı metot
        3- Function
    */

    constructor(isim, soyIsim, yas, maas) {   //* yapıcı metot -> yeni nesne oluştururken özelliklere değer ataması yapmayı sağlar
        this.isim = isim;
        this.soyIsim = soyIsim;
        this.yas = yas;
        this.maas=maas;   // sağ taraftakiler parametre, soldakiler this anahtar kelimesiyle yapılan değişken atama.
    }
    
    bilgileriGoster(){
        console.log(`İsim: ${this.isim} Soyisim: ${this.soyIsim} Yas: ${this.yas} Maas: ${this.maas}`);
    }
}


//Nesne oluşturmak
const insan1 = new Insan("Kübra","Emektar",29,10000); //* new anahtar kelime ile nesne oluşturuldu
                                                      //* yapıcı metodu işaret eder
insan1.bilgileriGoster();


//! Bir sınıfın constructor ve metotları ulaşmak için nesne türetmek gerekiyor
