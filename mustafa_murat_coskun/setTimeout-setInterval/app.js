//* setTimeout -> milisaniye sonra içindeki kodları çalıştırır

    setTimeout(() => {
        console.log("Naber?");
    }, 2000) //? 2 sn sonra geldi 

//* setInterval -> milisaniye aralıklarla bu kodu tekrar tekrar çalıştırır

    // i = 0;
    // setInterval(() => {
    //     i++;
    //     console.log(i);
    // }, 1000)

    

//* Clear interval -> setInterval'ı durdurmak için

    i = 0;
    let value = setInterval(() => {
        i++;
        console.log(i);
    }, 1000)

    document.getElementById("btn").addEventListener("click", ()=>{
        clearInterval(value);
    })