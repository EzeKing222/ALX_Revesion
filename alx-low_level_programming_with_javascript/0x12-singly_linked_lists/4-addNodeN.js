/**
 * addNodeN - a function that add node at a given index (index) in a linked list.
 * return: nothing.
 * @list: list Object.
 * @data: node data.
 * @index: the index to add node.
 */
import { CreateNode, LinkedList } from "./linkedList.js";
import listLen from "./1-listLen.js";


function addNodeN(list, data, index) {

    let current = list.head;

    if (index >= listLen(list)) return 0;

    const newNode = new CreateNode(data)

    let temp;
    let count = 0;
    while (current) {
        if (count == index - 1) {
            temp = current.next;
            current.next = newNode;
            newNode.next = temp;
        }
        current = current.next;
        count++;
    }
    console.log(`Added ${data} at index ${index}`);

}

export default addNodeN;