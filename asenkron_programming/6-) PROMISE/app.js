//* PROMISE

// Asenkron yapıyı senkrona çevirmek için 
// ES6 ile girdi

// 3 tane state var -> pending, resolve, reject


//Başarılı durumlarda resolve() tetiklenir
//Başarısız durumlarda reject() tetiklenir
// resolve ve reject içerisinde 3 tane function var -catch(), finally(), then()


//-----------------------------------------------------------------------------------

//! TEMEL KULLANIMI

// let check = true;

// function createPromise() {

//     let promise = new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promise Başarılı")
//         } else {
//             reject("Promise Başarısız")
//         }
//     })
//     return promise;
// }

// createPromise()
//     .then((response) => { // resolve lu promise dönerse then le yakalarız 
//         console.log(response);
//     })
//     .catch((error) => { // reject li promise dönerse catch le yakalarız 
//         console.log(error);
//     })
//     .finally(() => { // her iki durumda da çalışır
//         console.log("Her zaman çalışır")
//     })

//! ASENKRONU SENKRONA DÖNÜŞTÜRME - PROMISE + XMLHTTPREQUEST

//?----------------------------ÖRNEKKKKKKKKKKKKKKKKKKKKKKKKKKKK 1

function readStudents(url) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
    return promise;
}

readStudents("students.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Hepsi");
    })


//?------------------------------ÖRNEKKKKKKKKKKKKKKKKK 2--------------------------------------------------


function getUsers(url) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            })

        } catch (err) {
            reject(err);
        }
        xhr.open("GET", url);
        xhr.send();
    })
    return promise;
}

getUsers("https://jsonplaceholder.typicode.com/users/id",id)
    .then((data) => {
        console.log(data)
        // data.forEach((dat)=>{
        //     if(dat.id===3){
        //         console.log(dat.email)  //? emailini almak için
        //     }
        // })
    })
    .catch((err) => {
        console.log(err)
    })

//! BİRDEN FAZLA PROMISE VARSA ---> Promise.all

const p1 = Promise.resolve("birinci promise başarılı");
const p2 = Promise.resolve("İkinci promise başarılı");
const p3 = new Promise((resolve, reject) => {
    resolve("Üçüncü promise başarılı")
})
const p4 = Promise.reject("Hata var")

Promise.all([p1, p2, p3, p4])
    .then((response) => {
        response.forEach((res) => {
            console.log(res);
        })
    })

    .catch((err) => {
        console.log(err);
    })