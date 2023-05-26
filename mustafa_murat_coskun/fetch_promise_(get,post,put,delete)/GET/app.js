//* Fetch + Promise -> GET
// defaultta get yapacağı için yazmamıza gerek yok



//-----------ÖRNEK------------------------

function getData(url) {

    let promise = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    })
    return promise;
}

getData("https://jsonplaceholder.typicode.com/albums")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

// //-----------------ÖRNEK----------------------

// class Request {

//     get(url) {

//         let promise = new Promise((resolve, reject) => {
//             fetch(url)
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .then((data) => {
//                     resolve(data);
//                 })
//                 .catch((err) => {
//                     reject(err);
//                 })
//         })
//         return promise;
//     }
// }

// let request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })