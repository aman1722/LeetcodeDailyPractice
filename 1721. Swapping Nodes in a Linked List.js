var swapNodes = function(head, k) {
    let fast = head, second = head, first = head
  for(let i=0; i<k-1; i++)    fast = fast.next
  first = fast
  while(fast.next != null){
      fast = fast.next
      second = second.next
  }
  let temp = first.val
  first.val = second.val
  second.val = temp
  return head 
};