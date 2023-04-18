// Elementleri yer değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h5");
newTitle.className = "card-title";
newTitle.innerHTML = "Todo Listesi Değiştirildi";




cardBody.replaceChild(newTitle, cardBody.childNodes[1]);