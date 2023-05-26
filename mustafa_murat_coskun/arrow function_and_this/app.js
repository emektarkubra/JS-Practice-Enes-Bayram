// this - her zaman bulunduğu yeriin objesini gösterir

const person = {
    age: 25,
    tellAge: function () {
        //this - Person
        console.log(this);
        console.log(this.age); // this burada person objesini gösterir
    }.bind(this) // burada functiona this bağlanırsa içeriye window objesi çekilmiş olur

    //this - Window
}

person.tellAge();


const person1 = {
    age : 25,
    tellAge : ()=>{
        console.log(this);  // arrow functionla yazıldığı zaman window objesini gösterir (bind ile bağlamaya gerek yok)
    }
}

person1.tellAge();