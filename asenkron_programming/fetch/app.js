//* FETCH API

// Server a istek atmak- htttp isteğinden bulunmak için kullanılan bir metot


//? json dosyasından almak


function getStudents(url) {
    fetch(url) //! adrese istek atıldı, ancak fetch () <response> tipinde promise döner bu yüzden .json() metodu ile  .then le yakalanır
        .then((response) => {
            return response.json() //! json ile dönen değer yine promise döndüğü için tekrar then le tutulur
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

getStudents("students.json");


//? placeholder dan data almak


function getData(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

getData("https://jsonplaceholder.typicode.com/posts")


// -------------yerine----------------------------


function getData(url) {
    return fetch(url)

}

getData("https://jsonplaceholder.typicode.com/posts")

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })