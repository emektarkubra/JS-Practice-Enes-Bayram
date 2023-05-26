//* Fetch + Async Await 

// GET

async function getData(url) {

    let response = await fetch(url);
    let data = await response.json();
    return data;

}

getData("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

// POST

async function postData(url, data) {

    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    });
    let result = await response.json();
    return result;

}

postData("https://jsonplaceholder.typicode.com/albums", {userId: 12, title: "Tarkan Karma"})
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })


// PUT

async function putData(url, data) {

    let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })

    let result = await response.json();
    return result;
}

putData("https://jsonplaceholder.typicode.com/albums/1", {userId: 12,title: "Tarkan"})
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

// DELETE

async function deleteData(url) {

    let response = await fetch(url, {
        method: "DELETE"
    })

    let data = await response.json();
    return data;
}

deleteData("https://jsonplaceholder.typicode.com/albums/1")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })