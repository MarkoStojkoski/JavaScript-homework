let myArrayNum = [2,9,8,3,6,7,2] ; 



let myDiv = document.getElementById("printNumbers");
myDiv.innerHTML += "<ul>";
for (i=0; i<myArrayNum.length; i++) {
    myDiv.innerHTML += `<li> ${myArrayNum[i]} </li>`;
}
myDiv.innerHTML += "</ul>";
console.log(myDiv)


let sum=0;
for (i=0; i< myArrayNum.length; i++) {
    
    sum += myArrayNum[i]; 
    
}
console.log(sum);

mySum = document.getElementById("printNumbers");
mySum.innerHTML += `<p> Total sum is  ${sum} </p>`;
console.log(mySum);

// Bonus task

let div2 = document.getElementById("printOperation");
div2.innerHTML += "<p>";
let arrayLength = myArrayNum.length
for (i=0; i< myArrayNum.length;i++) {
    div2.innerHTML+=` ${myArrayNum[i]} ` 
    if (myArrayNum[i] != myArrayNum[arrayLength-1]) {
        div2.innerHTML+= "+"
    }

}
div2.innerHTML += `= ${sum}`;
div2.innerHTML += "</p>";

console.log(div2);