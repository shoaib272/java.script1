// async function hello() {
//     console.log("hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weatheer data");
//             resolve(200);
//         },3000);
//     });
// };
         //async await

// async function getweatherdata() {
//      await api();
//      await api();
// }
// console.log(getweatherdata());


function getdata(dataid) {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
         console.log("data =", dataid)
         resolve("success")
        }, 2000);
    })
 }

//async await

async function getalldata() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
}
console.log(getalldata());

// IIFE
(async function () {
    await getdata(1);
    await getdata(2);
    await getdata(3);
})();


