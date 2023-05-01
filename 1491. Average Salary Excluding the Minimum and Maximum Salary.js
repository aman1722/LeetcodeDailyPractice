var average = function(salary) {
    let val=0;
 let max= -Infinity;
 let min= Infinity;
 for(let el of salary){
     val+=el;
 max<el?max=el:max=max;
 min>el?min=el:min=min
 }

let ans= val-(max+min);
ans= ans/(salary.length-2);
return ans
};