/**
 * a program that finds and prints the first 98 Fibonacci numbers,
 * starting with 1 and 2
 */

var i = 0;
var j = 1;
var sum = 0;

for (var count = 0; count <= 98; count++) {
    sum = i + j;
    console.log(sum);
    i = j;
    j = sum;
}