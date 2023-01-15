let firstInput = prompt("What is the name of the recipe?");
let secondInput = prompt ("How many ingredients do we need for the recipe?");
let thirdInput = prompt (" Which ingredients do we need?");

let tableForRecipe = document.getElementById("recipeTable");

tableForRecipe.innerHTML += `<tr>`;
tableForRecipe.innerHTML+= `<th> Name of recipe: ${firstInput} </th> `;
tableForRecipe.innerHTML += `</tr>`;
tableForRecipe.innerHTML += `<tr>`;
tableForRecipe.innerHTML += `<td> Number of ingredients: ${secondInput} </td>`;
tableForRecipe.innerHTML += `</tr>`;
tableForRecipe.innerHTML += `<tr>`;
tableForRecipe.innerHTML += `<td> For this recipe we need: ${thirdInput}  </td>`;
tableForRecipe.innerHTML += `</tr>`;
