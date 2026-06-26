/**
 * rmvEnd - removes the last node of a linked list
 * @list: list Object
 */

import list from './main.js';

function rmvEnd(list) {
    if (!list.head) {
        console.log("List is empty, nothing to remove.");
        return;
    }

    if (!list.head.next) {
        list.head = null;
        return;
    }

    let current = list.head;
    while (current.next && current.next.next) {
        current = current.next;
    }

    current.next = null;
    console.log("Last node removed from the list.");
}

export default rmvEnd;