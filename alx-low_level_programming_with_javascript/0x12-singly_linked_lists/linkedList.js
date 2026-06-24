/**
 * CreateNode - a class that defines a node of a singly linked list.
 * LinkedList - a class that defines a singly linked list.
 * @head: pointer to the first node of the list.
 * @data: the data to be stored in the node.
 * @next: pointer to the next node in the list.
 */

class CreateNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNodeEnd(data) {
        const newNode = new CreateNode(data);

        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

export { LinkedList, CreateNode };