let input = parseFloat (prompt ("Please enter your weight in kg"));
let chickenWeight = 0.5;
function weightInChickens(input) {
    let result = input * chickenWeight;
    let paragraphResult = document.getElementById("chicken");
    paragraphResult.innerText=("Your weight in chickens is "+ result + "kg.");

    return console.log(result);
    

}

weightInChickens(input);