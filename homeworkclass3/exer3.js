function calculateAge (birthyear) {
    let resultAge = new Date().getFullYear()-birthyear;
    return resultAge
}

console.log (`You are ${calculateAge(1990) } years old`)
console.log (`You are ${calculateAge( 2001) } years old`)
console.log (`You are ${calculateAge( 1997) } years old`)
