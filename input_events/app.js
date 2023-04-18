// INPUT EVENTS

const todo = document.querySelector("#todoName");


function run(e) {
    console.log(e.type)
}

//focus  : input a odaklanıldığında

// todo.addEventListener("focus", run);

//blur  : inputtan çıkıldığında

// todo.addEventListener("blur", run);

//copy  : inputun içindeki kopyalandığında

// todo.addEventListener("copy", run);

//paste  : inputun içine yapıştırma yapıldığında

// todo.addEventListener("paste", run);

//cut   :inputun içinde cut yapıldığında

// todo.addEventListener("cut", run);

//select  : inputun içinde seçme işlemi yapıldığında

// todo.addEventListener("select", run);