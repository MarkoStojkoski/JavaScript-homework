let firstDiv = document.getElementById("first");
console.log(firstDiv);

let allParagraphs = document.getElementsByClassName("paragraph");
console.log(allParagraphs);

let lastDiv = document.getElementsByTagName("div")[2];
console.log(lastDiv);

let headerThree = lastDiv.lastElementChild;
console.log(headerThree);


let headerOneLastDiv = lastDiv.firstElementChild;
console.log(headerOneLastDiv);

let firstParagraphSecondDiv = allParagraphs[1];
let textFirstParagraphSecondDiv = firstParagraphSecondDiv.textContent;
console.log(textFirstParagraphSecondDiv);

let addText = document.querySelector("text").innerText += " text!";
console.log(addText)

let div = document.getElementsByTagName("div") [2];
let header1Div = div.firstElementChild;
header1Div.innerText = "Cnanged first header";
console.log(header1Div);
let header3Div = div.lastElementChild;
header3Div.innerText = "Changed third header";
console.log(header3Div);









