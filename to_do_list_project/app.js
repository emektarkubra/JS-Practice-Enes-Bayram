//! elementler tutuldu

const form = document.querySelector("#todoAddForm"); //forma todo eklenecek
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group"); //todolar buraya listelenecek
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

//! events leri çağıran bir metot oluşturuldu

runEvents();

function runEvents() {
    form.addEventListener("submit", addToDo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeToDoToUi);
    clearButton.addEventListener("click", removeAllToDoToEverywhere);
    filterInput.addEventListener("keyup", filter);

}

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");

    if (todos.length > 0) {

        todoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display:block")

            } else {
                todo.setAttribute("style", "display:none !important")

            }
        })

    } else {
        showAlert("warning", "Filtreleme yapmak için en az bir todo olmalıdır")
    }

}

function removeAllToDoToEverywhere(e) {
    const toDoList = document.querySelectorAll(".list-group-item");

    //Ekrandan silme
    if (toDoList.length > 0) {
        toDoList.forEach(function (todo) {
            todo.remove();
        })
        // storage den silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Tüm todo'lar başarılı şekilde silindi")

    } else {
        showAlert("warning", "Silmek için en az bir todo olmalıdır!");
    }


}

function removeToDoToUi(e) {
    if (e.target.className == "fa fa-remove") {
        let todo = e.target.parentElement.parentElement;
        todo.remove();
        removeToDoToStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi.")

    }
}

function removeToDoToStorage(removeToDo) {
    checkStorage();
    todos.forEach(function (todo, index) {
        if (removeToDo === todo) {
            todos.splice(index, 1);
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos));
}

//! toDo ekleyen genel metot yazıldı

function addToDo(e) {
    const inputText = addInput.value.trim(); //! input a giren değer alındı 
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen bir değer giriniz.");
    } else { //! farklı bir değer giriliyorsa metot çağırıldı
        addToDoToIU(inputText);
        addToDoToStorage(inputText);
        showAlert("success", "Todo Eklendi.");

    }

    e.preventDefault(); //! farklı sayfaya yönlendirmesi engellendi
}

//!  arayüze ekleme işlemi yapıldı


function addToDoToIU(newToDo) {

    const todo = document.createElement("li");
    todo.className = "list-group-item d-flex justify-content-between";
    todo.textContent = newToDo;

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    todoList.appendChild(todo).appendChild(link).appendChild(i);

    addInput.value = "";

};

//! storage a ekleme işi

let todos = [];

function checkStorage() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function addToDoToStorage(newToDo) {
    checkStorage();
    todos.push(newToDo);
    localStorage.setItem("todos", JSON.stringify(todos))

}


//! alert kutucuğu eklendi (Bootstrap Alerts yazınca çıkıyor)

/* <div class="alert alert-warning" role="alert">
                        This is a warning alert—check it out!
                    </div> */

function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(function () { //!  0.5 sn sonra kalkması için 
        div.remove();
    }, 500);
}


//! sayfa yüklendiğinde todo larım gitmesin

function pageLoaded() {
    checkStorage();
    todos.forEach(function (todo) {
        addToDoToIU(todo);
    })

}