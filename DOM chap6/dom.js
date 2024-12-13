                 //DOM manipulataion

// let name = document.getElementById("heading");
// console.dir(name);
// let javascript = document.getElementsByClassName("heading");
// console.dir(javascript);
// console.log(javascript);

// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);

// let elements = document.querySelector(".heading");
// console.dir(elements);
// console.log(elements.tagName)

// let allelements = document.querySelectorAll(".heading");
// console.dir(allelements);

// let divs =document.querySelector ("div").firstElementChild;
// console.log(divs);
// console.dir(document.body.firstElementChild);


    //properties  tagName, innerText, innerHTML, teextContent

// let divs = document.querySelector("h4");
// console.dir(divs);
// console.log(divs.tagName);

// let div = document.querySelector("div").innerText;
// console.dir(div);

//  div = document.querySelector("div").innerHTML;
// console.dir(div);



            //practice Q1

// let h2 = document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText = h2.innerText + " from Apna college"
  
                 //practice Q2

let divs = document.querySelectorAll(".box");
let idx = 1;
for (dviss of divs) {
    dviss.innerText = `mango box ${idx}`;
    idx++;
}

