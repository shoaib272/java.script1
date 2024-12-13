             // Attributes
// let div = document.querySelector("div");
// console.log(div);

   //style
// div.style.backgroundColor = "green"
// div.style.fontSize = "25px"
// div.innerText = "hello"

     //grtAttributes
// let id =div.getAttribute("id");
// console.log(id)
// let name =div.getAttribute("name");
// console.log(name);
// let uni =div.getAttribute("uni");

// console.log(uni);
     // settributes
// let pra = document.querySelector("p");
// console.log(pra.setAttribute("class","newclass"));

 
         //insert Elements
         
let heading = document.createElement("h1");
heading.innerText = "hello!"

let divs = document.querySelector("div").before(heading);

let button = document.createElement("button");   
button.innerText = "clickme"; 
button.style.backgroundColor = "red"
button.style.color = "white"

let body = document.querySelector("div").after(button);


          //delete Element
// let pra = document.querySelector("p");
// pra.remove();


                   //practice q1
                 
let button2 = document.createElement("button");   
button2.innerText = "clickme"; 
button2.style.backgroundColor = "red"
button2.style.color = "white"

let body2 = document.querySelector("body").prepend(button);                

//precrice Q2

let cont = document.querySelector("p");
cont.classList.add("newcontent" );





