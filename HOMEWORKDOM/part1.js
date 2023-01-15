let heading1 = document.getElementById("myTitle");
heading1.innerText = "Welcome to our page"
console.log(heading1.innerText);

let paragraph1 = document.getElementsByTagName("p")[0];
paragraph1.innerText = "Take a chance to look at our page";
console.log(paragraph1);

let paragraph2 = document.getElementsByTagName("p")[1];
paragraph2.innerText = "Please continue reading";
console.log(paragraph2);


let div = document.getElementsByTagName("div") [2];
let header1Div = div.firstElementChild;
header1Div.innerText = "Cnanged first header";
console.log(header1Div);

let header3Div = div.lastElementChild;
header3Div.innerText = "Changed third header";
console.log(header3Div);
