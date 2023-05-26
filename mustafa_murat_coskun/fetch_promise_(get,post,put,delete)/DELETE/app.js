//* Fetch + Promise -> DELETE

// -----------ÖRNEK-----------------

function deleteData(url, method) {
    let promise = new Promise((resolve, reject) => {

        fetch(url, method)
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

deleteData("https://jsonplaceholder.typicode.com/albums/1", {method: "DELETE"})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

// -------------------ÖRNEK-----------------------

class Request {

    delete(url, method) {
        let promise = new Promise((resolve, reject) => {
            fetch(url, method)
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
}

let request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/1", {method : "DELETE"})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })