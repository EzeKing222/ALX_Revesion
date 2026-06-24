/**
 * addNodeEnd - a function that adds a new node at the end of a list_t list.
 * @list: pointer to the head of the list
 * @data: the data to be stored in the new node
 * Return: void
 */
import { CreateNode } from './linkedList.js';


function addNodeEnd(list, data) {

    const newNode = new CreateNode(data);

    if (!list.head) {
        list.head = newNode;
        console.log(`Added ${data} as the first node`);
        return;
    }

    let current = list.head;

    while (current.next) {
        current = current.next;
    }
    current.next = newNode;

    console.log(`Added ${data} to the end of the list`);
}

export default addNodeEnd;