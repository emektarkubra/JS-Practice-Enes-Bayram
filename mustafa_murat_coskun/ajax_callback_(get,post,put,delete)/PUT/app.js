//! http request - callback - PUT

// function updateData (url,data,callback){

//     const xhr = new XMLHttpRequest();
//     xhr.open("PUT",url);
//     xhr.setRequestHeader("Content-type","application/json");
//     xhr.onload = function (){
//         if(xhr.status === 200){
//             callback(xhr.responseText);
//         }
//     }
//     xhr.send(JSON.stringify(data));
// }

// updateData("https://jsonplaceholder.typicode.com/albums/10", {userId: 143, title : "Tarkan Karma"}, function (response){
//     console.log(response);
// })


//! http request - callback - this

class Request {

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else {
                callback("Hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }
}

const request = new Request ();

request.put("https://jsonplaceholder.typicode.com/albums/10", {userId : 143, title : "Tarkan Karma"}, function (err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
})