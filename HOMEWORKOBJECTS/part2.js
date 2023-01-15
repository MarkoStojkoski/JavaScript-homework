let firstEntry = prompt("Enter the title of the book");
let secondEntry = prompt("Enter the author of the book");
let thirdEntry = prompt("What is the reading status of the book?");

let Library = new Object();
Library.name = firstEntry; 
Library.author = secondEntry; 
Library.readingStatus = thirdEntry; 

if ( Library.readingStatus == "true") {
    console.log("Book is read")
}else {
    console.log("Book is not read")
}



