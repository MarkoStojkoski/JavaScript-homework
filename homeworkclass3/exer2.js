let inputC = parseFloat (prompt("Please enter Celsius degrees")) 

function convertortoFahrenheit (inputC) {
    let convertResult = inputC * 1.8 +32
    return convertResult

}
alert (convertortoFahrenheit(inputC))

let inputF = parseFloat (prompt("Please enter Fahrenheit degrees"))

function convertortoCelsius (inputF) {
    let convertRes = (inputF-32) / 1.8000
    return convertRes 
}
alert (convertortoCelsius(inputF))