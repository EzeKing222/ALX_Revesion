var sum = 0;
function _strlen_recursion(s) {
  if (s === '') return 0;

  sum ++;
  _strlen_recursion(s.slice(1));
  return sum;
}
var s = 'Hello, World!';
_strlen_recursion(s);