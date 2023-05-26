//! hppt request + callback -DELETE

function deleteData (url,callback){

    const xhr = new XMLHttpRequest();
    xhr.open("DELETE",url);
    xhr.onload = function (){
        if(xhr.status===200){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

deleteData("https://jsonplaceholder.typicode.com/albums/10", function (response){
    console.log(response);
})



//! hppt request + callback

class Request {

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    delete(url,callback){

        this.xhr.open("DELETE",url);
        this.xhr.onload = () => {
            if(this.xhr.status===200){
                callback(null,this.xhr.responseText);  // response boş obje döndüğünden "Veri silme işlemi başarılı" yazılabilir
            }else{
                callback("Hata var",null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/1", function (err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
})