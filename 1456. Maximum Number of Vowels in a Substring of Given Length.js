var maxVowels = function(s, k) {
    let c=0;;
  let maxCount=0;
  let i = 0, j = 0;
  while(i < k){
      if(checkString(s[i++])){
          c++
      }
  }
  maxCount=Math.max(maxCount,c)
  while(i < s.length){
      if(checkString(s[j++])){
          c--
      }
      if(checkString(s[i++])){
          c++
      }
     maxCount=Math.max(maxCount,c)
  }
  return maxCount
};
const checkString = (ch)=>{
  if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
      return true
  }
  return false
};