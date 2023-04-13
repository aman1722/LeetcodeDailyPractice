function validateStackSequences(pushed, popped) {
    let n=pushed.length;
   
   let i=0,j=0;
   let st=[];
   
   while(i<n){
       if(pushed[i]!=popped[j]){
           st.push(pushed[i]);
       }else{
           j++;
           while(st.length && j<n && popped[j]==st[st.length-1]){
               st.pop();
               j++;
           }
       }
       i++;
   }
   return st.length==0;
};