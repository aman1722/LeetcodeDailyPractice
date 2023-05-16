var swapPairs = function(head) {
    var current = head, prev= null,temp,node1,node2,workAround;
while(current) {
    if(!current.next) {
        break;
    }
    temp = current.next.next; 
    node1 = current; 
    node2 = current.next; 

    node1.next = temp;
    node2.next = node1; 
    if(prev) {
        prev.next = node2;
    }
    if(!prev) {
        workAround = node2;
    }
    prev = node1;
    current = temp;
}
if(workAround) {
    workAround.next = head;
} else {
     workAround = head;
}

return workAround;
};