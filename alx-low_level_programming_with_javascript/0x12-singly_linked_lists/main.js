/**
 * list - create a linked list and add nodes to it.
 */

import { LinkedList } from './linkedList.js';
import addNodeEnd from './3-addNodeEnd.js';

const list = new LinkedList();
addNodeEnd(list, 10);
addNodeEnd(list, 20);
addNodeEnd(list, 30);

export default list;