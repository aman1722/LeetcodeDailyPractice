var pairSum = function(head) {
    let maxSum = 0;
   let fast = head;
   let slow = head;
   while(fast && fast.next){
       fast = fast.next.next;
       slow = slow.next;
   }
   fast = head;
   slow = reverse(slow);
   
   function reverse(head){
       let prev = null;
       let current = head;
       while(current){
           let next = current.next;
           current.next = prev;
           prev = current;
           current = next;
       }
       return prev;
   }
   while(slow){
       let sum = fast.val + slow.val;
       maxSum = Math.max(sum,maxSum);
       slow = slow.next;
       fast = fast.next;
   }
   return maxSum;
};