function fibonacciIteration(num){
    let FibArray = [0,1]
    for (var i = 2; i <= num; i++) {
        FibArray.push(FibArray[i-1] + FibArray[i-2]);
    }
    return FibArray;
}

function fibonacciRecursion(num){
    if(num==1){
        FibArray = [0];
        return FibArray
    }
    else if(num==2){
        fibonacciRecursion(num-1).push(1);
        return FibArray
    }
    else{
        let previousNumberinFibArray = ((fibonacciRecursion(num-1))[(fibonacciRecursion(num-1)).length-1])
        let secondPreviousNumberinFibArray = ((fibonacciRecursion(num-1))[(fibonacciRecursion(num-1)).length-2])
        fibonacciRecursion(num-1).push(previousNumberinFibArray+secondPreviousNumberinFibArray);
        return FibArray

    }
}

console.log("fibonacci to 8 with recursion");
console.log(fibonacciRecursion(8));