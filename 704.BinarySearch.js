var search = function(nums, target) {
       let flag = true;
    let ans ;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            // console.log(i);
            ans=i;
            flag = true;
            break;
        }else{
            flag=false;
        }
    }
    if(flag){
      return ans
    }else{
      return -1
    }
};