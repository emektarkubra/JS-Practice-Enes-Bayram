// Style Özelliği

const toDo1 = document.getElementsByClassName("list-group-item")[0];

toDo1.style.color = "white";
toDo1.style.backgroundColor = "purple";
toDo1.style.fontWeight = "bold";
toDo1.style.paddingTop = "20px";
toDo1.style.paddingLeft = "70px";

const list = document.getElementsByClassName("list-group")[0];

list.style.marginTop = "60px";
list.style.marginLeft = "100px";

const button = document.getElementById("todoClearButton");

button.style.background = "red";
button.style.fontWeight = "bold";
button.style.borderColor = "black";
button.style.padding="10px";
button.style.borderRadius = "50px";