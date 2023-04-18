//* This & Super & Super()

// Defaultta class lar object tir

//? this    -> bulunduğu sınıf demek
//? super   -> miras alınan sınıfı gösterir
//? super() -> miras alınan sınıfın constructor ını gösterir

// class Person {
//     firstName = "Kübra";

//     write() {
//         console.log(this.firstName);
//     }
// }



// class Student extends Person {
//     write() {
//         super.write();  //! miras alınan sınıftaki write() metoduna gider
//     }
// }

// const student = new Student();
// student.write();


class Person {

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }
}

class Student extends Person {
    
    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary)
    }
    writeInfo() {
        super.writeInfo();
    }
}

const student = new Student("Kübra","Emektar","20000");
student.writeInfo();