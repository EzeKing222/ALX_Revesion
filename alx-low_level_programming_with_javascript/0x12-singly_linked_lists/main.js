/**
 * list - create a linked list and add nodes to it.
 */

import { LinkedList } from './linkedList.js';
import addNodeEnd from './3-addNodeEnd.js';
import listLen from './1-listLen.js';
import addNodeBegin from './2-addNodeBegin.js';
import addNodeN from './4-addNodeN.js';
import printList from './0-print_list.js';
import rmvBegin from './5-rmvNodeBegin.js';
import rmvEnd from './6-rmvNodeEnd.js';
import rmvNodeN from './7-rmvNodeN.js';

const list = new LinkedList();
addNodeEnd(list, 10);
addNodeEnd(list, 20);
addNodeEnd(list, 30);
addNodeBegin(list, 80);
addNodeN(list, 40, 2);
printList(list);
console.log(`they are ${listLen(list)} elements in List`);
rmvBegin(list);
printList(list);
console.log(`they are ${listLen(list)} elements in List`);
rmvEnd(list);
printList(list);
console.log(`they are ${listLen(list)} elements in List`);
rmvNodeN(list, 2);
printList(list);
console.log(`they are ${listLen(list)} elements in List`);

export default list;