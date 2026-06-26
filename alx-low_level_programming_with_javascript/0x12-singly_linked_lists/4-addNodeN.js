/**
 * addNodeN - a function that add node at a given index (n) in a linked list.
 * return: nothing.
 * @list: list Object.
 * @data: node data.
 * @n: the index to add node.
 */

import { CreateNode, LinkedList } from "./linkedList.js";
import listLen from "./1-listLen.js";
import list from "./main.js";


function addNodeN(list, data, n) {

    let current = list.head;

    if (n >= listLen(list)) return 0;

    const newNode = new CreateNode(data)

    let temp;
    let count = 0;
    while (current) {
        if (count == n - 1) {
            temp = current.next;
            current.next = newNode;
            newNode.next = temp;
        }
        current = current.next;
        count++;
    }
    console.log(`Added ${data} at index ${n}`);

}

export default addNodeN;