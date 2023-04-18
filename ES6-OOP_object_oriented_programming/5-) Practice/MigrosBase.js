class MigrosBase {

    indirimOrani = 20;

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {

        let odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) {
            if (this.kartVarmi) {

                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                });

            } else {
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                });
            }
        } else {
            alert("En az bir tane ürün satın almalısınız..  ")
        }
        return odenecekTutar;
    }

    urunleriKontrolEt() {
        if (urunler != null & urunler.length > 0) {
            return true;
        }
        return false;
    }

}