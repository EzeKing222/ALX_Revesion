/**
 * list_len - function that returns the number of elements in a linked list

 * returns: the number of elements in a linked list
*/

import list from './main.js';

function listLen(list) {
    var count = 0;
    var current = list.head;

    if (!list.head) return count;

    while (current) {
        current = current.next;
        count++;
    }
    return count;

}

export default listLen;