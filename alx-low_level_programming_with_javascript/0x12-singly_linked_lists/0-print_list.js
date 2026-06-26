/**
 * printList - a function that prints all the elements of a list_t list.
 * @list: list Object.
 * Return: void
 */
import list from './main.js';


function printList(list) {
    var current = list.head;

    if (!list.head) {
        console.log("0 Elements");
        return;
    }

    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

export default printList;