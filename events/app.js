// Events (Olaylar)
//HTML etiketlerinde olan herşey

//? input events
//? mouse events
//? click events
//? load events
//? others



/*
! 1-) events html etiketinin yanına attribute olarak eklenebilir (TERCİH EDİLMEZ)

<a href="#" onclick="alert('Merhaba..')" id="todoClearButton" //? tek tırnaklı
    class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle </a>

    ? biri bu etikete tıklarsa Merhaba alerti gelir


<a href="#" onclick="this.textContent='Geri Al'" id="todoClearButton"
    class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

    ? etikete tıklandığında text i değişsin demek

<a href="#" onclick="document.querySelectorAll('.card-title')[1].textContent='Title Değişti'"
    id="todoClearButton" class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

    ? etikete tıklandığında title a git text i değiştir demek


! 2-) eventsler html etiketinin içine yazılıp, içinde metot çağırılabilir.

function titleDegistir() {
    const title = document.querySelectorAll('.card-title')[1];
    title.textContent = "Title değiştir";
}

<a href="#" onclick="titleDegistir()" id="todoClearButton" 
    class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

! 3-) Ayrıca direk addEventListener() metoduyla JS de yazılabilir.

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", function () {  //? html de onclick 
    alert("Merhaba");                                //? js de click (on yok)
})


! 4-) En güzeli önce metot oluştur, addEventListener() metoduyla çağır.

const clearButton = document.querySelector("#todoClearButton");
const title = document.querySelectorAll('.card-title')[1];

clearButton.addEventListener("click", titleDegistir); //? click basıldığında metodu çalıştır demek 
                                                      ? DİKKAT () koyma yoksa basmadan metodu çalıştırır

function titleDegistir() {
    title.textContent = "Title değiştir";
}



*event objesi görme

const clearButton = document.querySelector("#todoClearButton");
const title = document.querySelectorAll('.card-title')[1];

clearButton.addEventListener("click", titleDegistir); 
                                                      

function titleDegistir(e) {
    console.log(e);             //? event objesini verir
    console.log(e.type);        //? event objesinin tipini verir
    console.log(e.target);      //? eventin hedef html etiketini verir
    console.log(e.target.textContent);      //? eventin hedef html etiketinin text ini verir
    console.log(e.target.className);        //? eventin hedef html etiketinin class isimlerini verir.

}
*/