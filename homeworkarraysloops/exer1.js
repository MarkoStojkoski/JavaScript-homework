// 1. Function with two parameters (number, array)
let array1 = [0,1,3,5,6,7,5,10,17,5,7,5,6];

function findNumber(number, array1) {
    let ocurences =0;

    for(let i=0;i<array1.length;i++) {
        if(array1[i]===number){
            ocurences++;
        }
        
    }

    
    return console.log (number + ` is repeted ` + ocurences + ' times');

}

 findNumber(5,array1);

//  2# Example

 let array2 = [5,9,8,7,9,15,12,9,10,17,16,9,10];

 findNumber (9, array2);

//  3# Example

let array3 = [10,11,52,65,100,78,92,11,52,11,9,];

findNumber (11, array3);
