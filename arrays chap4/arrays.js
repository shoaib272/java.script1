let marks = [97, 85,76,67,45]
marks[1] = 66;  
console.log(marks);
console.log(marks[1]);
 
// arrays using for loop

let friends = ['shoaib', 'abdul', 'mohsin','haseeb','nafees']

for (let i=0; i <friends.length; i++) {
    console.log(friends[i])
}

          //arrays using for of loop

// for (let item of friends) {
//     console.log(item.toUpperCase());
// }

// practiceQ1
// let markss = [92, 85,65,95,76,65,90,]
//  let sum= 0;

//  for (let i of markss) {
//     sum= sum+i;
//  }

//  console.log(sum);
//  let avg = sum / markss.length;

//  console.log(`avg marks of class = ${avg}`);


       // practiceQ2
   
// let items = [250 , 645 , 300, 900, 50] ;

// for (let i=0; i<items.length;  i++) {
//     let offer = items[i] / 10;
//       items[i] -= offer;
// }
// console.log(items);


       //arrays methods

// let items = [34, 45, 64, 75 ];
// let items2 = [1, 2, 3, 4, 5, 6, 7 ];
// let numbers = items.concat(items2); // joins multiple arrays 
// console.log(numbers);
// items.push('fries');    //push() add to end
// console.log(items);

// console.log(items.toString());   // convert arrays to string
// let del =items.pop()  //pop() ddelete from end
// console.log(items);
// console.log(del);
// items2.unshift(20);
// del = items2.shift();
// console.log (items2);
// console.log(del);
// console.log(items2.slice(2,4));
// console.log (items2);
// items2.splice(3, 1, 103,104);
// console.log(items2);


//practice Q
let companys= ["bloomberg", "microsoft", "uber", "googe", "IBM", "netflix"];
console.log(companys);
let del = companys.shift()
console.log(del);
console.log(companys);
companys.splice(1, 1 ,"Ola");
console.log(companys);
companys.push("amazon");
console.log(companys);






