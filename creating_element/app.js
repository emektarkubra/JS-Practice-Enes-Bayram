// Dinamik olarak Element Oluşturma

//yeni button oluştur


const link = document.createElement("a");
link.id = "goBlog"
link.className = "btn btn-dark btn-sm btn-mt3";
link.href = "https://youtube.com.tr";
link.target = "_blank";
link.innerHTML = "Youtube'a git";

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.appendChild(link);

//-todo5 ekleme

const todo5 = document.createElement("li");
todo5.className = "list-group-item d-flex justify-content-between";
todo5.innerHTML = "Todo 5";

const linkk = document.createElement("a");
linkk.href = "#";
linkk.className = "delete-item";

const deletee = document.createElement("i");
deletee.className = "fa fa-remove";

const todoList = document.querySelector(".list-group");
todoList.appendChild(todo5).appendChild(linkk).appendChild(deletee);