var isValid = function(s) {
    if(!s || s.length === 0) {
      return true;
  }
  const map = new Map([['{','}'], ['(',')'], ['[',']']]);
  const stack = [];
  for(let i = 0; i < s.length; i++) {
      if(map.has(s[i])) {
          stack.push(s[i]);
      } else {
          if(stack.length && map.get(stack[stack.length - 1]) === s[i]) {
              stack.pop();
          } else {
              return false;
          }
      }
  }
  return stack.length === 0;
};