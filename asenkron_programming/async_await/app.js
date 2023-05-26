//* ASYNC & AWAIT

// PROMISE THEN ZİNCİRİNDEN KURTARIR
// async anahtar kelimesi function başına  konduğunda promise döner
// await ise işlem bitene kadar bekletir ve işlem bittikten sonra alttaki kodları çalıştırır

// async function hello() {
//     return "Hello World";
// }

// console.log(hello()); //? function başına async anahtar kelimesi konduğunda promise döner

//-----FETCH ile HTTP isteğinde bulunduk---------------------------------------

// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => {
//             return response.json()
//         })
//         .then((post) => {
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => {
//                     return response.json()
//                 })
//                 .then((comments) => {
//                     console.log(comments);
//                 })
//         })
// })

//--------ASYNC AWAIT ile senkrona dönüştürüldü------------------------------------------


document.querySelector("#button").addEventListener("click", async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            
            return response.json()
        })
        .then(async (data) => {

            await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)

                .then((response) => {
                    return response.json()
                })
                .then((comments) => {
                    console.log(comments)
                })
        })
})

//--------------------------------------------------------------------------------------------

// document.querySelector("#button").addEventListener("click", async () => {
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const post = await responsePost.json()
//     const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//     const comments = await responseComments.json()
//     console.log(comments);

// })



//! kısaltılmış hali

document.querySelector("#button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(comments);
})