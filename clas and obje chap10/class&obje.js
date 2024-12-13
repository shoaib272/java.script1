       //object Example

// const student = {
//     Name : "shoaib",
//     marks : 92.2,
//     printMarks : function() {
//         console.log ("marks = ", this.marks)
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// }
// console.log (employee.calcTax())


// const shoaib5 = {
//     salary: 5000000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };
// const shoaib2 = {
//     salary: 5000000,
// };const shoaib3 = {
//     salary: 5000000,
// };const shoaib4 = {
//     salary: 5000000,
// };


// shoaib5.__proto__ = employee;
// shoaib2.__proto__ = employee;
// shoaib3.__proto__ = employee;
// shoaib4.__proto__ = employee;

// console.log(shoaib5.calcTax())



//         //classes

// class hondacar{

//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brandName = brand;  
//         this.mileage = mileage;
//     } 

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     // setBrand(brand) {
//     //     this.brandName = brand;
//     // }
// }  

// let toyotacar = new hondacar("toyotacar", 12);
// // console.log(toyotacar.stop())
// console.log(toyotacar);

// let fortuner = new hondacar("fortuner", 18);
// // fortuner.setBrand("new model 2025")
// console.log(fortuner);


          //inheritance

// class Person {
//     constructor(name) {
//         this.species = "homo sapiens"
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }

//     // sleep() {
//     //     console.log("sleep");
//     // }

//     // work() {
//     //     console.log("do nothing");
//     // }
// }

// class engineer extends Person {
//     constructor(name) {
//         super(name);  //to invoke parent class constructor
       
//     }
//     work() {
//         super.eat();   //super keyword
//         console.log("solve problem, build something");
//     }
// }

// let softwareengineer = new engineer("shoaib akhtar");

// console.log (softwareengineer)
// console.log (softwareengineer.work())
// // console.log (shoaib.eat())



//practice Q1
let DATA = "secret data"


class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", DATA);
    }
}

class Admin extends user {
    constructor(name, email){
        super(name, email)
    }
    editdata() {
        DATA = "new secret informationn"
    }
}

let student1 = new user("shoaib", "shoaib12@email.com");
let student2 = new user("rehman", "abdul2324@email");
console.log(student1.viewData());
console.log(student2);

let Admin1 = new Admin("ADmin", "admin@email.com")
try {           //Error Handling
    console.log(Admin.editdata());
}catch(err) {
    console.log(err);
}
console.log(DATA);