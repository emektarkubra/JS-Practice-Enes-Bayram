//* Fetch + Promise -> POST

//--------------ÖRNEK---------------------

function postData(url, data) {

    let promise = new Promise((resolve, reject) => {

        fetch(url, {
                method: "POST",
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

postData("https://jsonplaceholder.typicode.com/albums", { userId: 23, title: "Thriller"})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

//--------------ÖRNEK-----------------------

class Request {

    post(url, data) {

        let promise = new Promise((resolve, reject) => {

            fetch(url, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
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
request.post("https://jsonplaceholder.typicode.com/albums", {
        userId: 1,
        title: "Thriller"
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })