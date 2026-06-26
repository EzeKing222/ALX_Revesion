/**
 * rmvBegin - a fuction that remove the first Element of a LinkedList.
 * @list: list Object.
 */

import list from './main.js';

function rmvBegin(list) {
    if (!list.head) {
        console.log("List is empty");
        return;
    }
    list.head = list.head.next;
}

export default rmvBegin;