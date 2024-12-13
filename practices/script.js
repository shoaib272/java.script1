//             // asyncrunus

// setTimeout( () => {
//     console.log ('hello shoaib')
// },4000);  //timeout 3s = 3000ms


//             // functions
// const hello = () => {
//     console.log("hi how are you")
//     return (7+9)
// }

// v = hello();
// console.log(v)

//             //E2

// function average(x,y){
//     return 1 + (x+y) / 2
// }          
// let a=1;
// let b=2;
// let c=3;

// console.log("average of a and b is", average(a,b));
// console.log("average of b and c is", average(b,c));
// console.log("average of a and c is", average(a,c));


//               //promise

// let p1 = new Promise((resolve, reject) => {
//     setTimeout (() => {
//         // console.log("hello! print");
//        resolve(true)
//     }, 2000);
// });



// // console.log(p)
// p1.then((value) => { 
//     console.log (value)
// });




// let p2 = new Promise((resolve, reject) => {
//     setTimeout (() => {
//         // console.log("hello! not print");
//        reject(new Error("error accur"));
//     }, 2000);
// }); 
// // console.log (p2) 
// p2.catch ((error)=> {
//     console.log(error)
// })


// let p3 = new Promise((resolve, reject) => {
//     setTimeout (() => {
//         console.log("hello! print in 2s");
//        resolve(true)
//     }, 2000);
// });

// p3.then((value) => { 
//     console.log (value)
// 

// console.log('this is promis');

// let p = new Promise((resolve, reject) => {
// let a = Math.random();
// if (a < 0.5) {
//     reject("code no run")
// } 
// else {
//      setTimeout (() => {
//          console.log('success is done');
//          resolve("shoiab")
//      }, 2000);
//    } 
// });

// let p2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("code no run2")
//     } 
//     else {
//          setTimeout (() => {
//              console.log('success is done2');
//              resolve("shoiab2")
//          }, 2000);
//        } 
//     });

// let p3 = Promise.all([p, p2]);
// let p3 = Promise.allSettled([p, p2]);
// let p3 = Promise.race([p, p2]);
// let p3 = Promise.any([p, p2]);
// let p3 = Promise.resolve([p, p2]);
// let p3 = Promise.reject([p, p2]);

// p3.then ((a) => {
// console.log(a);
// }).catch ((er) => {
//     console.log(er);
// });

                 //async Await
 
// async function getData() {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             resolve("shoaib")
//         }, 3000);
//     });
// };

// async function getData() {
//             let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//             let data = await x.json()
//             return data
// };


// async function main(){
//             console.log('loadinng modul');

//             console.log('do something');

//             console.log('load data')

//             let data = await getData()

//             console.log (data);

//             console.log('process data');

//             console.log('process data2');
// }

// main()



            // json

// let js = {
//     name : "shabi",
//     numbr : 90
// }

// console.log(js)

// let jsst = JSON.stringify(js);
// console.log(jsst);

// jsst = jsst.replace("shabi", "akhtar")
// console.log(jsst);


// newjs = JSON.parse(jsst);

// console.log(newjs);





//           //for loops
 
// for (i=1; i<=5; i++){
//     console.log("i =", i)
// }

// sum = 0;
// for (let i = 1; i <=5; i++) {
//  sum = sum + i; 
// }
// console.log("sum = ", sum )


//             // while loop  

// let i= 1;
// while (i <=4) {
//     console.log('i =', i);
//     i++;
// };


//              //do while-loop

             
// let j= 1;
// do {
//     console.log('j =', j);
//     j++;
// } 
//   while(j<=5);

 
//               //for of loop

// let hs = "shoaib"     //simple of loop
// for(let i of hs) {
//     console.log("i =",i)
// }


// let hss = "shoabi"
// length = 0;               // execute lenght
// for(let i of hss) {
//     console.log("i =",i)
//     length++;
// }
// console.log("length =", length);


//             //for in loop

// let student = {
//     name:"shoaib",
//     marks: 99,
//     position: "pass",
// }
// for(let key in student) {
//     console.log("key =", key, "value =", student[key])
// }



//maps

// let val = [23, 45, 56];

// console.log(val);

// va = val.map ((vaul) => {
//          return vaul > 40;
// })

// console.log (va)


//filter

// let val = [23, 45,123, 56, 67,145, 78, 89,99,122,134];

// newval = val.filter((va) => {
//     return va < 79
// });

// console.log(newval);

//reduce 

// let val = [10, 14];

// newval = val.reduce((p, n) => {
//     return p * n
// });
// console.log(newval);



// let text = "hello";
// const myArray = text.split("");
// console.log(myArray);

// document.querySelector("#domo").innerHTML= myArray;


// let hyy = document.getElementById("hss");

// let a = hyy.hasAttribute("class");
// let as = hyy.setAttribute("class2","sss err");
// console.log(a);
// console.log(as);
// console.log(hss.attributes);




