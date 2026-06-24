/**
 * printList - a function that prints all the elements of a list_t list.
 * @head: pointer to the first node of the list
 * Return: void
 */
import list from './main.js';


function printList(list) {
    var current = list.head;

    if (!list.head) return console.log("0 Elements");
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

printList(list);