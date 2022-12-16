function printEvenOrOddNumbers( inputNumber ){

    let myFinalMsg = "";
  
    for(let i = 1; i <= inputNumber; i++){
      
      if( i % 2 === 0 ){
        
        myFinalMsg += `${i} is even\n`
      }else {
       
        myFinalMsg += `${i} is odd\n`
      }
    }
  
 
    
    return myFinalMsg
  
  }
  
  
  let userInputNumber = parseFloat(prompt("Hey man enter a number")); 
  
  let numbersOutput = printEvenOrOddNumbers(userInputNumber)
  
  console.log(numbersOutput)
