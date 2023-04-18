// 10'luk sayıyı 2'liğe çevirme

/*

15  -> 2 ye böl -> 7.5 (noktadan sonra atılmalı)    3  1 
20  ->


*/


//25


turnToBinary(sayi);

function turnToBinary(sayi) {
    sayi = "";

    while (true) {

        sayi += (sayi % 2).toString();
        sayi = Math.floor(sayi % 2);

        if (sayi == 1) {
            sayi+=1;
            break;
        }
    }

}