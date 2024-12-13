// 


// practic Q1
 let button1 = document.querySelector("#toggle");
 let body = document.querySelector("body");
 let curruntMode = "light";



 button1.addEventListener("click", () => {
          
    if (curruntMode==="light") {
        curruntMode = "dark"; 
        body.classList.add("dark")
        body.classList.remove("light")
        button1.textContent = "dark mode"
    } else {
        curruntMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
        button1.textContent = "light mode"
    }
    
    console.log (curruntMode);
 })