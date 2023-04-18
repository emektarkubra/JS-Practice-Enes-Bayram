//* Inheritance Kavramı

// bazı class lar diğer class ları miras alırlar ve metotlarını ve özelliklerini kullanırlar
// Yani bir sınıf miras alıındığında özellikleri ve metotları kullanılabilir
// JS desteklemiyor

class Person {
    firstName = "Kübra";

    write() {
        console.log(this.firstName);
    }
}



class Student extends Person {

    write() {
        console.log(this.firstName);
        super.write();   //! eğer aynı metot bu sınıfta varsa onu alır ancak miras alınan sınıfa gitmek için super anahtar kelimesi kullanılır
    }

}

const student = new Student();
student.write();