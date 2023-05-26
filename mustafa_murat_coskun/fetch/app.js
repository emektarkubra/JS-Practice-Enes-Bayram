//* FETCH API


// text dosyasından veri isteğinde bulunmak

function getTextFile(url) {

    fetch(url)
        .then((response) => {
            console.log(response); // burada sonuç response şeklinde geliyor. Bu yüzden esas değeri return yapmalıyız
            return response.text(); // return yapıldığı için tekrar .then le yakalanıyor
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

getTextFile("example.txt");

// Local json dosyasına veri isteğinde bulunmak

function getJsonFile(url) {
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })

}

getJsonFile("example.json")

// External API den veri isteğinde bulunmak

function getExternalAPI(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })

}

getExternalAPI("https://api.exchangeratesapi.io/latest");