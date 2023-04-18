//Elementler üzerinde gezinmek

const toDo = document.querySelectorAll(".list-group-item")[0];
const lastChild = document.querySelector(".list-group-item:nth-child(4)");
const toDoList = document.querySelectorAll(".list-group")[0];
const card = document.querySelectorAll(".card")[0];



let value;


// Parent -> Child

value = toDoList;

value = toDoList.children[0];
value = toDoList.children[toDoList.children.length - 1];
value = toDoList.children[3].textContent = "Değişti";

value = Array.from(toDoList.children);

value.forEach(function (todo) {
    console.log(todo.textContent);
})

// Child -> Parent

value = toDo;

ul = toDo.parentElement
cardBody = ul.parentElement;
cardd = cardBody.parentElement;
row = cardd.parentElement;
container = row.parentElement;


//Sibling -> Sibling

value = toDo;

value = toDo.nextElementSibling;
value = toDo.nextElementSibling.nextElementSibling;
value = toDo.nextElementSibling.nextElementSibling.nextElementSibling;

value = lastChild;

value = lastChild.previousElementSibling;
value = lastChild.previousElementSibling.previousElementSibling;
value = lastChild.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(value);


//ÖRNEK- Class ı row olandan  class ı "card-body" olanın ilk çocuğunu getir.

const row1 = document.querySelector(".row");

let cardTitle = row1.children[0].children[3].children[0].textContent = "Todo Listesi Başlığı Değişti";


console.log(cardTitle);

// ÖRNEK - container dan gel todo3 ü seç

const containerr = document.querySelector(".container");

const todo3 = containerr.children[0].children[0].children[3].children[2].children[2];

todo3.textContent = "Değiştirildi..."

todo3.style.color = "red";
todo3.style.backgroundColor = "yellow";