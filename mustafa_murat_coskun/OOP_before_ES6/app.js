//* OOP - Before ES6

        // function Employee(name, age) { // constructor (yapıcı) metot
        //     this.name = name;
        //     this.age = age;
        //     this.showInfos = function () {
        //         console.log(`İsim: ${this.name} Yaş: ${this.age}`);
        //     }
        // }

        // const emp1 = new Employee("Kübra", 25);
        // console.log(emp1);


//* Prototype

        // Bir nesnenin başka nesne tarafından özelliklerini ve metotlarını miras alabileceği bir özelliktir.
        // Bellek açısından faydalıdır
        // Mesela; emp1 de bir prototype oluşurken en temel obje olan Object'inde prototype'ı oluşur ve özelliklerini ve metotlarını miras alarak kullanabilir

        //? Her nesne türettiğimizde metotlar her seferinde tekrar bellekte yer tutar. Bu yüzden metotlar prototype içinde bir kere yazılıp miras alınabilir.

        // function Employee(name, age) {
        //     this.name = name,
        //         this.age = age
        // }

        // Employee.prototype.showInfos = function () { //! 
        //     console.log(`İsim: ${this.name} Yas: ${this.age}`)
        // }

        // const emp1 = new Employee("Kübra", 25);
        // const emp2 = new Employee("Yusuf", 25);
        // emp1.showInfos();


//* Object.create metodu

        // Bir nesne türetilirken prototype'ını başka objeden oluşturmamızı sağlar

        // const obj = {
        //     test1: function () {
        //         console.log("Test 1")
        //     },
        //     test2: function () {
        //         console.log("Test 2")
        //     }
        // }

        // const emp = Object.create(obj);
        // emp.name = "Kübra";
        // emp.age = 25;

        // console.log(emp); // prototype'ında obj nin metotları görülür

        //* Örnek - bir objenin prototype'ını diğer objeye geçirmek

        // function Person() { // 1-) constructor oluşturuldu

        // }

        // Person.prototype.test1 = function () { // 2-) prototoype'ında test1 ve test2 metotları oluşturuldu
        //     console.log("Test 1");
        // }
        // Person.prototype.test2 = function () {
        //     console.log("Test 2");
        // }


        // function Employee(name, age) { // 3-) özelliklere sahip yeni constructor oluşturuldu
        //     this.name = name;
        //     this.age = age;
        // }

        // Employee.prototype = Object.create(Person.prototype); // 4-) employee prototype'ına person'ın prototype'ı verildi

        // const emp = new Employee("Kübra", 25); // 5-) nesne türetildi

        // Employee.prototype.myTest = function () { // 6-) employee'nin kendi prototype'ında metot oluşturuldu
        //     console.log("My Test");
        // }

        // emp.test1();
        // console.log(emp);


//* call, apply, bind fonksiyonları

        // this anahtar kelimesinin bazı durumlarda kullanımı ve hangi objeyi gösterdiğini anlamak her zaman bu kadar kolay olmaz. 
        // Böyle durumlarda veya bir fonksiyonu farklı objeler üzerinde kullanmak istediğimiz zamanlarda, 
        // Javascript prototype objesinin içinde bulunan call,apply ve bind fonksiyonlarını kullanabiliriz.

        // Call ve Apply fonksiyonları Function objemizin __proto__ objesinde bulunan iki adet fonksiyondur.

        // call() -> fonksiyonu gösterir - addNumber.call(obj1,100,200);
        // apply() -> fonksiyonu gösterir - addNumber.apply(obj1,[100,200]);

        // const obj1 = {
        //     number1: 10,
        //     number2: 20
        // }

        // const obj2 = {
        //     number1: 30,
        //     number2: 40
        // }

        // function addNumber(number3, number4) {
        //     console.log(this.number1 + this.number2 + number3 + number4); // this burada global de olduğu için window objesini gösteriyor bu yüzden sonuç -NaN gelir
        // }

        // addNumber.call(obj1, 100, 200); // call() ile obj1 i gösterdiğimiz için this artık obj1 i gösterir
        // addNumber.call(obj2, 100, 200);

        // addNumber.apply(obj1, [100, 200]); // apply() ile obj1 i gösterdiğimiz için this artık obj1 i gösterir
        // addNumber.apply(obj2, [100, 200]);

        // bind() -> genellikle eventlerde this anahtar kelimesinin karıştığı durumlarda kullanılır
        // farkı ekstra kopya bir fondyion üretir

        // function getNumbersTotal(number3, number4) {
        //     return this.number1 + this.number2 + number3 + number4;
        // }

        // const copyFunc1 = getNumbersTotal.bind(obj1);
        // const copyFunc2 = getNumbersTotal.bind(obj2);

        // console.log(copyFunc1(100, 200));
        // console.log(copyFunc2(100, 200));

//* Prototype Tabanlı Kalıtım - Inheritence

        // function Person(name, age) {
        //     this.name = name,
        //         this.age = age
        // }

        // Person.prototype.showInfos = function () {
        //     console.log(`İsim: ${this.name} Yaş: ${this.age}`);
        // }

        // function Employee(name, age, salary) {
        //     this.name = name;
        //     this.age = age;
        //     this.salary = salary
        // }

        // const emp = new Employee("Kübra", 25, 20000);


        // Employee.prototype = Object.create(Person.prototype); // employee prototipi person prototipini miras aldı


        // Overriding - İptal etme

        // Employee.prototype.showInfos = function (name, age, salary) {
        //     console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
        // }

        // const emp = new Employee("Kübra", 25, 20000);
        // console.log(emp);