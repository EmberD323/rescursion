//fib
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

//mergesort
//sort left,sort right,merge

function mergeSort(inputArray){
   

    if(inputArray.length == 1){ 
        //dont split
        return inputArray
    }
    else{// split, sort,merge
        
        //split array to left and right
        let arrayLeft = [];
        let arrayRight = [];
        let midpoint = inputArray.length/2;
        for (let i=0;i<midpoint;i++){
            arrayLeft.push(inputArray[i]);
        }
        for (let i=Math.round(midpoint);i<inputArray.length;i++){
            arrayRight.push(inputArray[i]);
        }
        let sortedLeft = mergeSort(arrayLeft);
        let sortedLeftLength = sortedLeft.length
        let sortedRight = mergeSort(arrayRight);
        let sortedRightLength = sortedRight.length

       
        let sortedArray = [];
        let j=0;
        let h=0;
    mergeLoop:for(let k=0;k<(sortedLeftLength+sortedRightLength);k++){
            
            if(sortedLeft[h]<sortedRight[j]){
                sortedArray.push(sortedLeft[h]);
                h++;
                //if h>sortedLeftLength - 1 then push the rest of sortedright and break
                if(h >= sortedLeftLength){
                    for(j;j<sortedRightLength;j++){
                        sortedArray.push(sortedRight[j]);
                    }
                    break mergeLoop;
                }
            }
            else{
                sortedArray.push(sortedRight[j]);
                j++;
                //if j>sortedRightLength - 1 then push the rest of sortedleft and break
                if(j >= sortedRightLength){
                    for(h;h<sortedLeftLength;h++){
                        sortedArray.push(sortedLeft[h]);
                    }
                    break mergeLoop;
                }
            }
        }

        return sortedArray;

    }
    

}

console.log("merge sort [7,2,5,4,1,6,0,3]");
console.log(mergeSort([7,2,5,4,1,6,0,3]));

