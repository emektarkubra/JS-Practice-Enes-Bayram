/*
       *AJAX NEDİR?

        AJAX : Asynchronous JavaScript And XTML
        AJAX bir programlama dili değildir.
        Web Server'dan veri isteklerinde kullanılır.
        Ancak ESKİDİR..Artık Fetch API ler kullanılıyor


        const xhr= new XMLHttpRequest();
        console.log(xhr);
        
        özellikler --> readyState, status, statusText, onreadystatechange(event)
 */


function prepareURL(url, id) {
       if (id === null) {
              return url; // id nin boş ve dolu olmak üzere url design edildi
       }
       return `${url}?postId=${id}`
}

function getComments(url, id) {
       let newURL = prepareURL(url, id)
       const xhr = new XMLHttpRequest(); // obje oluşturuldu
       xhr.addEventListener("readystatechange", () => { // event ve arrow function oluşturuldu 
              if (xhr.readyState === 4 && xhr.status === 200) { //  state de bir değişiklik olduğunda eğer readyState 4 ve status 200 olduğunda 
                     console.log(JSON.parse(xhr.responseText));
              }
       })
       xhr.open("GET", newURL) // istek açmak
       xhr.send(); // isteği yollamak
}

getComments("https://jsonplaceholder.typicode.com/comments", null) // null hepsini getirir
// 1 versek id si 1 olanlar gelir


/*********************************************************************************************************************/


function getData(url) {
       let xhr = new XMLHttpRequest();
       xhr.addEventListener("readystatechange", () => {
              if (xhr.readyState === 4 && xhr.status === 200) {
                     console.log(JSON.parse(xhr.responseText));
              }
       })
       xhr.open("GET", url);
       xhr.send();
}

getData("https://jsonplaceholder.typicode.com/posts");