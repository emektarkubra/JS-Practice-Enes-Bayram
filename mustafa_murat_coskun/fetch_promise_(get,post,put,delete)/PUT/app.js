//* Fetch + Promise -> PUT

//---------------ÖRNEK----------------

function putData(url, data) {

    let promise = new Promise((resolve, reject) => {
        fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            })
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

putData("https://jsonplaceholder.typicode.com/albums/1", {userId: 23,title: "Tarkan Karma"})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


//---------------ÖRNEK----------------

class Request {

    put(url, data) {

        let promise = new Promise((resolve, reject) => {
            fetch(url, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
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
request.put("https://jsonplaceholder.typicode.com/albums/1", {
        userId: 13,
        title: "Thriller"
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })