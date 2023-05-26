function process1() {
    setTimeout(() => {
        console.log("Process1")  // asdenkron çalışırlar
    }, 3000)
}

function process2() {
    setTimeout(() => {
        console.log("Process2")
    }, 2000)
}

process1();
process2();

//----------------------------

// function process1(callback) {
//     setTimeout(() => {
//         console.log("process1")
//         callback();
//     }, 3000)

// }

// function process2() {
//     setTimeout(() => {
//         console.log("process2")
//     }, 2000)
// }

// process1(process2); //? daha sonra çalıştırmak istediğimiz function parametre olarak yazılır

//-----------------------------

const langs = ["Pyhton", "Java", "C++"];

function addLangs(lang,callback) {
    setTimeout(() => {
        langs.push(lang);
        console.log("Eklendi");   // asenkron problemi olacak
        callback();
    }, 2000)
}

function getAllLangs() {
    setTimeout(() => {
        langs.forEach((lang) => {
            console.log(lang);
        })
    }, 1000)
}

addLangs("JavaScript",getAllLangs);
