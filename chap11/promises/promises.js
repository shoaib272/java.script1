// function asyncFunc () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1",)
//             resolve("success1")
//         },4000)
//     })
// };

// function asyncFunc2 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2",)
//             resolve("success2")
//         },4000)
//     })
// };
             //promise chain

// console.log("get data1")
// asyncFunc().then((res) => {
//     console.log("get data2")
//     asyncFunc2().then((res) => {});
// });



                   //E2
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//      console.log("i am shoaib")
//      resolve("success")
    
//     });
// };
// let promise = getPromise();
// promise.then ((res) => {
//     console.log("fulfilled =", res);
// });

// promise.catch ((err) => {
//     console.log("rejected =",err);
// });



// function getdata(dataid) {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data =", dataid)
//         resolve("success")
//        }, 2000);
//    })
// }

// //promisechain

// getdata(1).then((res) =>{ 
//     getdata(2).then((res) =>{
//         getdata(3).then((res) =>{ 
//             console.log(res);
//         }) 
//     })
// })


