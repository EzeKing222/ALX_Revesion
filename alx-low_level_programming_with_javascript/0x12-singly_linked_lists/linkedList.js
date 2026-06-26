/**
 * CreateNode - a class that defines a node of a singly linked list.
 * LinkedList - a class that defines a singly linked list.
 * @head: pointer to the first node of the list.
 * @data: the data to be stored in the node.
 * @next: pointer to the next node in the list.
 */

class CreateNode {
    // creating a node
    constructor(data) {
        this.data = data;
        this.next = null;
    };
}


class LinkedList {
    //initializing a list
    constructor() {
        this.head = null;
    }

}

export { LinkedList, CreateNode };