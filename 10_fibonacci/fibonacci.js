const fibonacci = function(index) {
    let startingNum = index + 1
    let fibonacciSeq = [1, 1];
    let totalCounter = 0;

    if (index < 0) {
        return "OOPS"
    } else if (index === 0 || index === "0") {
        return 0
    }

    for (let i = 1; i < startingNum; i++){
        totalCounter = fibonacciSeq[i] + fibonacciSeq[i - 1];
        fibonacciSeq.push(totalCounter)
        console.log(totalCounter);
        console.log(fibonacciSeq);
    }

    return fibonacciSeq[index - 1];

};

// Do not edit below this line
module.exports = fibonacci;
