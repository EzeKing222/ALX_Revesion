/**
 * rmvNodeN - removes a node at a given position in a linked list
 * @list: list Object
 * @index: position of the node to remove
 */
import listLen from './1-listLen.js';

function rmvNodeN(list, index) {

    if (!list.head) {
        console.log("List is empty");
        return;
    }

    if (index < 0 || index >= listLen(list)) {
        console.log(`Index ${index} is out of bounds`);
        return;
    }

    let current = list.head;
    if (index === 0) {
        list.head = current.next;
        console.log(`Removed node at index ${index}`);
        return;
    }

    let prev = null;
    let count = 0;

    while (count < index) {
        prev = current;
        current = current.next;
        count++;
    }

    prev.next = current.next;
    console.log(`Removed node at index ${index}`);
}

export default rmvNodeN;