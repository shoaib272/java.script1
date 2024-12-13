const URL = "https://cat-fact.herokuapp.com/facts"
const para = document.querySelector("#para")
const buton = document.querySelector("#btn")

const getFActs = async () => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    para.innerText = (data[0].text);
}
// console.log(getFActs())

buton.addEventListener("click", getFActs);
