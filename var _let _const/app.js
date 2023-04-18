/*    

*            ---------------DEĞİŞKENLER------------------

*           var/let/const degiskenIsmi = degiskenDegeri;

            var yas = 23;
            let sayi = 10;
            const sayi = 5;

 ?      a-) var -> function scope özellik gösterir. Yani function içinde veya block içinde kullanıldığında her zaman function scope gibi davranır.
 ?                 Ram'de yer kaplar

            function selamVer(){
                var selam="Herkese selam";
                console.log(selam);
                if(true){
                    var b = 10;
                    console.log (b);  //* normalde block scope ancak function içinden de erişilebilir
                };
            }; 

            selamVer();

?       b-) let/const -> block scope özellik gösterir. Yani süslü parantezi dışından erişim sağlanamaz.                

            function selamVer(){
                var selam="Herkese selam";
                console.log(selam);
                if(true){
                    let b = 10;
                    console.log (b);  //* sadece içeriden erişilebilir.
                };
            }; 

            selamVer();

           !DİKKAT-1 

            var a= 5;             
            var a= 10;             //* 2 tane var ile aynı isimde değişken olduğunda sonrakini alır.
            console.log(a);

            if (true){
                let a= 5;
                let a=10;         //* ancak 2 tane let ile aynı değişken ismi olduğunda hata verir.
                console.log (a);
            }

            !DİKKAT-2 - let&const farkı

            let a= 5;
            a=10;           //* sonradan değer değiştirilebilir
            console.log(a);

            const a= 5;
            a=10;           //* sonradan değer değiştirilemez (const = constant-sabit)
            console.log(a);

            ? Mesela;

            const user = {
                username : "Kübra",
                password : "123",
            };

            user = {age:25};            //* yeni birşey eklemeye izin vermez

            user.username = "Yusuf";    //* ancak user'ın username'ine gidip içindekiler değiştirilebilir

            console.log(user);

*/





