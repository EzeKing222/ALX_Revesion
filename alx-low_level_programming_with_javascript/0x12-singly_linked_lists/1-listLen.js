/**
 * list_len - function that returns the number of elements in a linked list
 * @list: list Object.
 * returns: the number of elements in a linked list
 */


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