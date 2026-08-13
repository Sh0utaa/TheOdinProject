let arr = [];
const container = document.querySelector("#container");

const p = document.createElement("p");

p.innerText = "Hey I'm red!";
p.setAttribute("style", "color: red");

arr.push(p);

const h3 = document.createElement("h3");

h3.innerHTML = "I'm a blue h3!";
h3.setAttribute("style", "color: blue");

arr.push(h3);

const div = document.createElement("div");

div.setAttribute("style", "border: black, background-color: pink")

const h1 = document.createElement("h1");

h1.innerText = "I'm in a div";

div.appendChild(h1);

const pTag = document.createElement("p");

pTag.innerHTML = "Me Too!";

div.appendChild(pTag);

arr.push(div);

arr.forEach(element => {
    container.appendChild(element);  
});