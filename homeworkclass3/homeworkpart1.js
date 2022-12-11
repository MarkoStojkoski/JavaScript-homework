function typeParameter (input) {
    let result = typeof(input)
    return result;
}

console.log (`This parameter is ${typeParameter(2)}`)
console.log (`This parameter is ${typeParameter(true)}`)
console.log (`This parameter is ${typeParameter("Marko")}`)
console.log (`This parameter is ${typeParameter()}`)
console.log (`This parameter is ${typeParameter(null)}`)