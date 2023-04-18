//* DOM Seçiciler (Selectors) - Style özellikleri

// class name, id, tag name


// getElementById  -> id ye göre elementi yakalar



const button = document.getElementById("todoClearButton");

console.log(button);
console.log(button.id);
console.log(button.getAttribute("id"));
console.log(button.getAttribute("class"));
console.log(button.className);
console.log(button.classList);
console.log(button.classList[1]);

const classListesi = button.classList; //sırayla class listesini dönerek yazar.
classListesi.forEach(function (className) {
    console.log(className);
})

const buttonText = button.textContent; //* butonun text ini alır. Ancak farkı string olarak alır
const buttonText2 = button.innerHTML;  //* butonun text ini alır. Ancak farkı html etiketi olarak alır.
console.log(buttonText2);              //* Dolayısıyla text te değişiklik yapılırken html etiketi eklendiğinde 
                                       //* textContent bunu string olarak alır, ancak innerHTML etiket olarak alır.

button.textContent = "<b>ToDo Ekleyin</b>"; // <b> yi string gibi ekler
button.innerHTML = "<b>ToDo Ekleyin</b>";   // <b> yi etiket gibi ekler ve text i bold yapar


// getElementByClassName  -> class ismine göre elementi yakalar

const toDoList = Array.from(document.getElementsByClassName("list-group-item"));
toDoList.forEach(function (toDo) {
    console.log(toDo);
})
console.log(toDoList);

// getElementByTagName  -> tag e göre elementi yakalar

const forms = Array.from(document.getElementsByTagName("form"));

console.log(forms);
console.log(forms[0]);
console.log(forms[0].id);

forms.forEach(function (form) {
    console.log(form);
})

const lists = document.getElementsByTagName("li");
console.log(lists);


//! getElementById   -   getElementByClassName   -    getElementByTagName yerine;

//* querySelector   - querySelectorAll  - hepsini yaparlar  (seçim yaparken css selectorler kullanılır)

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);

const toDoList1 = document.querySelector(".list-group-item"); // class dan 1 tane getirir
console.log(toDoList);

const toDoList2 = document.querySelectorAll(".list-group-item"); // aynı class olanları getirir
console.log(toDoList2);

const toDoList3 = document.querySelectorAll(".list-group-item")[2]; // aynı class dan olan listenin 2.indeksindekini getir
console.log(toDoList3);

const listeler = document.querySelectorAll("li");
console.log(listeler);

const listeler1 = document.querySelectorAll("li:first-child"); 
console.log(listeler1);                 // ("li:last-child");
                                        // ("li:nth-child(1)");
                                        // ("li:nth-child(even)");
                                        // ("li:nth-child(odd)");
