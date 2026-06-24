/**
 * add - a functin that prints the sum of all the multiples of 3 or 5 below 1024
 *
 * Return: nothing.
 */
function add() {
    var sum = 0;

    for (let i = 0; i < 1024; i++) {
        if ((i % 3 == 0) || (i % 5 == 0))
            sum ++;
    }
    console.log(sum);
}

add();