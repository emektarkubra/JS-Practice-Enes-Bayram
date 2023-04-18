// 2'lik sayıyı 10'luğa çevirme



//101  ->   1x(2^2)   +   0x(2^1)    +    1x(2^0)

let sayi = "1011";

turnToDecimal(sayi);

function turnToDecimal(sayi) {
    let toplam = 0;
    let ust = 0;

    for (let i = sayi.length - 1; i >= 0; i--) {

        toplam += Number(sayi.charAt(i)) * Math.pow(2, ust);
        ust++;
    }
    console.log("Sonuç: " + toplam);
}

