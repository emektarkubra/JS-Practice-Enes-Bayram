//* Static Anahtarı

class Matematik {

    static topla(a, b) {
        console.log(a + b);
    }

    static cikar(a, b) {
        console.log(a - b);
    }

    carp(a, b) {
        console.log(a * b);
    }

    bol(a, b) {
        console.log(a / b);
    }
}


Matematik.topla(5, 4);


//*---------------------------------------------------------------------------------

class Insan {

    static languages = 10;

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName, this.lastName,this.salary,this.languages)  //! languages static olarak tanımlandığı için böyle erişilmez
    }

}

const insan1=new Insan("Kübra","Emektar",10000);
insan1.writeInfo(); 

console.log(Insan.languages); //! static tanımlandığı için class ile erişilebilir




