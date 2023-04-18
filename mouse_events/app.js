// MOUSE EVENTS

//DOMContentLoaded  //? sayfa yüklendiğinde
//load


        // window.addEventListener("load", run);

        // function run() {
        //     alert("Sayfa yüklendi");
        // }



// click    //? tıklandığında


        // const todoList = document.querySelectorAll(".card-title")[1];
        // todoList.addEventListener("click", run);

        // function run(e){
        //     console.log(e.type)
        // }

        // console.log(todoList);



// dblclick     //? çift tıklandığında

        // const todoList = document.querySelectorAll(".card-title")[1];
        // todoList.addEventListener("dblclick", run);

        // function run(e){
        //     console.log(e.type)
        // }

        // console.log(todoList);




// mouseover    //? mouse la üzerine gelindiğinde (içindeki html etiketleri de dikkate alır)


        // const cardBody=document.querySelectorAll(".card-body")[1];
        // cardBody.addEventListener("mouseover", run);

        // function run(e){
        //     console.log(e.type)
        // }




// mouseout     //? mouse la elementin üzerinden çıkıldığında (içindeki html etiketleri de dikkate alır)


        // const cardBody=document.querySelectorAll(".card-body")[1];
        // cardBody.addEventListener("mouseout", run);

        // function run(e){
        //     console.log(e.type)
        // }




// mouseenter   //? mouse la üzerine gelindiğinde (içindeki html etiketleri de dikkate almaz)

        // const cardBody=document.querySelectorAll(".card-body")[1];
        // cardBody.addEventListener("mouseenter", run);

        // function run(e){
        //     console.log(e.type)
        // }






// mouseleave    //? mouse la elementin üzerinden çıkıldığında  (içindeki html etiketleri de dikkate almaz)



        const cardBody=document.querySelectorAll(".card-body")[1];
        cardBody.addEventListener("contextmenu", run);

        function run(e){
            console.log(e.type)
        }