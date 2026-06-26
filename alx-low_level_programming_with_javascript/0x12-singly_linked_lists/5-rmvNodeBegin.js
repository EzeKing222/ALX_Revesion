/**
 * rmvBegin - a fuction that remove the first Element of a LinkedList.
 * @list: list Object.
 */
function rmvBegin(list) {
    if (!list.head) {
        console.log("List is empty");
        return;
    }
    list.head = list.head.next;

    console.log("First node removed from the list.");
}

export default rmvBegin;