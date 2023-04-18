//* CALLBACK NEDİR ?
// Bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapının senkron yapıya çevrilme işlemi


// function getName(callback) {
//     setTimeout(() => {
//         console.log("Kübra");
//         callback();
//     }, 1000);
// }

// function getSurname() {
//     setTimeout(() => {
//         console.log("Emektar");
//     }, 500);
// }

// getName(getSurname);


function getName(callback) {
    setTimeout(() => {
        let name = "Kübra"
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Emektar";
        callback(surname);
    }, 500);
}

function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 27;
        callback(age);
    }, 300);
}

getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {            //! CALLBACK HELL
            console.log(name, surname, age);
        })
    })
});