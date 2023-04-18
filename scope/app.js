/*
        ? ----------------SCOPE (KAVRAM)---------------

        ? Global Scope      : değişken süslü parantez içinde tanımlanmaz ve her yerden erişebilirsin.
        ?                     dezavantajı ise Ram'de boşuna yer kaplar
        ? Function Scope    : function methodunda; değişken süslü parantez içinden tanımlandığında (sarı), 
        ?                     sadece süslü parantez içinden erişilebilir, dışarıdan erişilmez.
        ? Block Scope       : function methodu dışında; değişken, süslü parantez içinden tanımlandığında (mor), 
        ?                     sadece süslü parantez içinden erişilebilir, dışarıdan erişilmez.



*  1-) Global Scope 

    var a=5;   (global scope)

    if (true){
        console.log(a);
    }

    function method1(){
        console.log(a);
    }

    method1();

* 2-) Function Scope

    function method1 (){
        var sayi = 10;           (function scope)
        console.log(sayi);       (sadece içeriden erişilebilir, dışarıdan erişmek istesek  çünkü değişken içeride)
    }

    method1();


* 3-) Block Scope    

    function method1(){

        var a=10;                 (function scope)

    if(true){
        var b=10;                 (block scope)
    };
    
    while (true){
        var b=10;                 (block scope)
    };
    
    for(var i=0; i<=10; i++){     (block scope)
    
    };

};

*/




