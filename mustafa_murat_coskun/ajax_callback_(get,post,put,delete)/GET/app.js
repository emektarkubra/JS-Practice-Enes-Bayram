// AJAX, callback, http requests


//! 1.yöntem 

// class Request {

//     constructor() {
//         this.xhr = new XMLHttpRequest();
//     }

//     get(url) {

//         this.xhr.onload = function () {
//             if (this.status === 200) { // burada this zaten xml i gösteriyor
//                 console.log(this.responseText);
//             }

//         }
//         this.xhr.open("GET", url);
//         this.xhr.send();

//     }

// }
// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/posts");

//! 2.yöntem 

// class Request {

//     constructor() {
//         this.xhr = new XMLHttpRequest();
//     }

//     get(url) {

//         this.xhr.onload = () => {
//             if (this.xhr.status === 200) { // burada this zaten xml i gösteriyor
//                 console.log(this.xhr.responseText);
//             }

//         }
//         this.xhr.open("GET", url);
//         this.xhr.send();

//     }

// }
// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/posts");


//! callback ve http request ile kullanımı 


function getRequest(url, callback) {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(xhr.responseText);
        }
    }

    xhr.open("GET", url);
    xhr.send();

}


getRequest("https://jsonplaceholder.typicode.com/posts", function (response) { // geri dönüş değerini işleyecek bir callback fonksiyonu verilir
    console.log(response);
});

//! callback - http request - this ile kullanımı 


class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {

        this.xhr.onload = () => {
            if (this.xhr.status === 200) { // burada this zaten xml i gösteriyor
                callback(null, this.xhr.responseText); //null hata yok anlamında ilk parametre olarak gönderilir
            } else {
                callback("Hata oluştu", null); // dönen değer olmadığı için 2 tane parametre alır
            }
        }
        this.xhr.open("GET", url);
        this.xhr.send();
    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/posts", function (err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});