// const person = { 
//     userName:"Nima",
//     userAge: 22,
//     sayMyName() {
//         setTimeout(() => {
//             console.log(this.userName);
//         }, 3000);
//     }

// say= () => { 
//     console.log(this);
// }
// }


// person.sayMyName();

// function createPerson(userName, userAge) {
//     return{
//         userAge,
//         userName,
        // say() {
        //     alert("Hello")
//         }
//     };
// }

// const reandomPerson = createPerson("tima",22)

// function createPerson (userName, userAge) {
//     this.name = name;
//     this.age = age
// }

// const user  = new creatUser("Asem", 17)

// console.log(user);
// console.log(person);
// console.log(reandomPerson);

// console.log(this);
// person.say();


// class createPerson{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     say: () => { 
//         console.log(this);
//     }
// }

// const student - new CreateStudent("Timaw",22);
// student.say();
// console.log(student);




class CreatePers {
    constructor(name, fam, dob, age, ) {
        this.name = name;
        this.fam = fam;
        this.dob = dob;
        this.age = age;
        this.age = age;
        
    }
    function () {
        console.log(this.age = 2022 - this.dob);
    }
}

myPers = new CreatePers ("Bek", "ov", 1990)
myPers.function();
console.log(myPers);