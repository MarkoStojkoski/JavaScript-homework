function minMax(numbearray) {
    let min =numbearray[0]; 
    let max =numbearray[0]; 
    for (let i= 0; i<numbearray.length; i++)
    if (numbearray[i] >max) {
        max= numbearray[i];
    } else if (numbearray[i] < min) {
        min = numbearray[i];
    }
    sum =min + max;
    return `Min: ${min}, Max: ${max}, Sum: ${sum}`;
}

let numberarray1 = [3,5,8,7,6,10,15]; 

let minMaxSum = minMax(numberarray1); 
console.log(minMaxSum);

