//* Async Await

// ES7 ile gelen anahtar kelimeler
// Promiseleri daha effective kullanmamızı sağlar

// Async anahtar kelimesi function başına konur ve return yapılırsa data promise olarak döner
// await anahtar kelimesi kod başına konduğunda işlemin bitmesini bekler sonra alttaki kodları çalıştırır. Async le beraber kullanılır
// await, bir promise'in çözümlenmesini beklemek için kullanılır, let ifadesi ile await ifadesiyle kullanılamaz. Promise objesinin başında kullanılır

//------------ASYNC-----------------------

async function test(data) {
    // return new Promise
    return data;
}

test("Merhaba")
    .then((response) => {
        console.log(response);
    })


//-----------------AWAIT------------------

async function test(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir")
        }, 5000);
    })

    let response = await promise; // promise in çalışmasını 5 sn bekletir sonra alttaki kodları çalıştırır
    return response;
}

test("Merhaba")
    .then((response) => {
        console.log(response);
    })


//------------ÖRNEK-----------------

async function testData(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data)
            } else {
                reject(new Error("Lütfen string bir değer girin"));
            }
        }, 5000);
    })
    const response = await promise; // await yukarıya da konabilir
    return response;
}

testData("Hey")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

//-------------FETCH İLE KULLANIMI-----------


async function getData(url) {

    let response = await fetch(url)
    let data = await response.json();
    return data;

}

getData("https://api.exchangeratesapi.io/latest")
    .then((response) => {
        console.log(response);
    })