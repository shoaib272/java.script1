// function myname (m,n) {

// console.log(m + n);
// }
// myname(2, 34);
// myname(2,3);
// myname(4,5);

      // arrow function

// const arrowsum = (a, b) => {
//     console.log (a+b)
// }
// arrowsum(3, 4);

// let print = () => console.log("hello");
// print();

      // practice Q1
    //   function VOWELS (str) {
    //     let count = 0;
    //     for (let chra of str) {
    //         if (chra === "a" || chra === "e" || chra === "i" || chra === "o" || chra === "u"){
    //             count++;
    //         } 
    //     }
    //     console.log(count);
    //   }
    //   VOWELS("shoaib akhtar")


              // practice Q2

    // const arrow = (str) => {
    //     let count = 0;
    //      for (let chra of str) {
    //              if (chra === "a" || chra === "e" || chra === "i" || chra === "o" || chra === "u"){
    //                  count++;
    //              } 
    //          }
    //         console.log(count);
    //       }
    //       arrow("shoaib akhtar")


               //foreach loop arrays
// let arr = [1 , 2, 3, 4, 5]; 

// arr.forEach ( function printval(val) {
//          console.log(val);
// } )
//            // for arrow function
// arr.forEach ((val, o ,arr ) => {
//     console.log(val, arr);
// } )


            //practice Q3
//   let arr = [1 , 78, 3, 98, 57]; 
//   arr.forEach ( function print(val) {
//               console.log(val**2);
// } ) 


            //map arrays

let nums = [32, 45, 68, 43];


// nums.map ((valu) =>{
//     console.log(valu)
// });

// newnum = nums.map ( (valu) => {
//           return valu > 44;
// })
// console.log(newnum);


// //                    //filter array method
      
                   
// let ar = [2, 50,101, 34, 213,22, 95,  7, 130, 24, 9];

// newfilter = ar.filter((val) =>{
//     return val >90 ;
// })
// console.log(newfilter);
// console.log(ar)

//                       //reduce array method
                   
// let arrr = [2, 4 ,5 ,8,9];

//  output = arrr.reduce ((pre, crunt) =>{
//     return pre + crunt;
// })
// console.log(output);



                     //practice Q5


// let n =prompt("enter any nuumber :");
// let aa = [];
// for (let i=1; i <=n; i++) {
//     aa[i-1] = i;
// }

// console.log(aa);

// const sum = aa.reduce((res, crunt) =>{
//     return res +crunt;
// })
// console.log("sum = ", sum);

// const factorial = aa.reduce((res, crunt) =>{
//     return res * crunt;
// })
// console.log("factorial =", factorial);




