
/**@fibonacci - a program that finds and prints the sum of the even-valued terms
 * in the Fibonacci sequence whose values do not exceed 4,000,000
 * By starting with 1 and 2
 */


function fibonacci () {

    var sum = 0;
    var i = 1;
    var j = 2;
    var nextIndex = 0;

    while (nextIndex <= 4000000) {

        nextIndex = i + j;

        if (nextIndex % 2 == 0) sum += nextIndex;

        i = j;
        j = nextIndex;
    }
    return sum;
}

console.log(fibonacci());
