/**
 * sum - prints the sum of all the multiples of 3 or 5 below 1024
 *
 * Return: Always 0 (Success)
 */
function sum() {
    let i, sum = 0;

    for (i = 0; i < 1024; i++) {
        if ((i % 3 == 0) || (i % 5 == 0))
            sum += i;
    }
    console.log(sum);
    return (0);
}