           //Asynchornous

// console.log("one")
// console.log("2")
// setTimeout( () => {
//     console.log ('hello shoaib')
// },4000);  //timeout 3s = 3000ms
// console.log("three")
// console.log("four")
// console.log("one")


//callbacks

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback) {
//     sumcallback(a,b);
// }

// calculator(1,2,sum);

//callback Hell
//nesting
// let age = 19
// if (age >=18) {
//     if(age >= 50) {
//         console.log("senior");
//     } else {
//         console.log("adult")
//     }
// } else {
//     console.log("child")
// }

// for(let i=0; i <5; i++){
//     for(let j=0; j <5; j++) {
//     console.log(i);
//     }
// }


function getdata(dataid, getNext) {
   setTimeout(() => {
    console.log("data =", dataid)
    if (getNext) {
        getNext();
    }
   }, 2000);
}
                   //callback Hell
getdata(145, () =>{
    getdata(2, () => {
       getdata(3,() => {
        getdata(4) 
       }) ;
    });
 });