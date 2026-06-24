/**
 * list - create a linked list and add nodes to it.
 */

import { LinkedList } from './linkedList.js';
import addNodeEnd from './3-addNodeEnd.js';
import listLen from './1-listLen.js';
import addNodeBegin from './2-addNodeBegin.js';

const list = new LinkedList();
addNodeEnd(list, 10);
addNodeEnd(list, 20);
addNodeEnd(list, 30);
addNodeBegin(list, 80);

export default list;
listLen(list);