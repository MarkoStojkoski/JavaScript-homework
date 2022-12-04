// Exercise#1

let input = prompt("Enter your avialable cash for tonight ")
let fridayCash = parseInt (input)

if (fridayCash >= 50) {
    alert (`You should go out 
    to a dinner and a movie`)
} else if (fridayCash >= 35) {
    alert (`You should
    go to a fine meal`)
} else if ( fridayCash >=12) {
    alert (`You should
    go to see a movie`)
} else {
    alert (`Looks like
    you'll be watching TV tonight.`)
}