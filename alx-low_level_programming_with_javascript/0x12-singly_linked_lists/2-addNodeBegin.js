/**
 * addNodeBegin - a function that adds a new node at the beginning of a list_t list.
 * @list: pointer to the head of the list
 * @data: the data to be stored in the new node
 * Return: void
 */
import list from './main.js';
import { CreateNode } from './linkedList.js';

function addNodeBegin(list, data) {
    const newNode = new CreateNode(data);

    newNode.next = list.head;
    list.head = newNode;
    console.log(`Added ${data} to the beginning of the list`);
}

export default addNodeBegin;