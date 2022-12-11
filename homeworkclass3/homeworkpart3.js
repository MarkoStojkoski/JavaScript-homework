let input = parseFloat(prompt("Please enter the ammount of cash"));


function cashAtm (input) {
    let limit = 18000;
    let moneyleft = limit - input;
    
    if (input<=limit) {
        return ( `You have withdrawn ${input}, money left on the account ${moneyleft}`)

    } else {
        return ("You don't have enough money on the account")
    }
}

alert(cashAtm(input));

    


