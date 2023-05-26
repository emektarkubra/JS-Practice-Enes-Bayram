//! http Request + callback - POST 


// function sendRequest(url, data, callback) {

//     const xhr = new XMLHttpRequest();

//     xhr.open("POST", url);
//     xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onload = function () {
//         if (xhr.status === 201) {
//             callback(xhr.responseText);
//         } 
//     }

//     xhr.send(JSON.stringify(data));
// }

// sendRequest("https://jsonplaceholder.typicode.com/albums", {userId:2, title : "Thriller"}, function (response){
//         console.log(response);
   
// });

//! http Request + callback + this - POST 

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    post(url, data, callback) {

        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // istek başlığını set ediyoruz-content tipinin json formatında olmasını istiyoruz

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null,this.xhr.responseText);
            } else {
                callback("Post Request : Bir hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }
}
const request = new Request();
request.post("https://jsonplaceholder.typicode.com/albums", {userId: 2, title: "Thriller"}, function (err,response){
    if(err === null){
        console.log(response);
    }else {
        console.log(err);
    }
});



