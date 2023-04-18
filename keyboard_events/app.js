// KEYBOARD EVENTS

//keypress   //? tuşa basıldığında (harf ve sayılarda)

        // document.addEventListener("keypress", run);

        // function run(e){
        //     console.log(e.key);     // bastığın tuşları verir
        //     console.log(e.keyCode); // tuşların ASCII tablosundaki karşılığını verir
        //     console.log(e.which);   // tuşların ASCII tablosundaki karşılığını verir
        // }

//keydown   //? tuşa basıldığında (tüm tuşlarda)

        // document.addEventListener("keydown", run);

        // function run(e){
        //     console.log(e.key);     // bastığın tuşları verir
        //     console.log(e.keyCode); // tuşların ASCII tablosundaki karşılığını verir
        //     console.log(e.which);   // tuşların ASCII tablosundaki karşılığını verir
        // }


//keyup     //? tuştan elini kaldırdığında (tüm tuşlarda)


        // document.addEventListener("keyup", run);

        //     function run(e){
        //         console.log(e.key);     // bastığın tuşları verir
        //     }




    //? ÖRNEK- f5 e basıldığında sayfa yenilemeyi engelle

        document.addEventListener("keydown", run);

            function run(e){
                if(e.keyCode==116){
                    alert("Sayfa yenileme engellendi");
                    e.preventDefault();
                }   
            }



        //? ÖRNEK-


        let cardTitle = document.querySelectorAll(".card-title")[0];
        let search= document.querySelector("#todoName");
        

        search.addEventListener("keyup", run);

        function run(e){
            cardTitle.textContent=e.target.value
            console.log(e)
        }





