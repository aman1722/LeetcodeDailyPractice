var numSubseq = function(nums, target) {
    const mod = 1000000007, arr = [];
   let num = 1;

   for (let i = 0; i < nums.length; i++) 
   {
       arr.push(num);
       num = num * 2 % mod;
   }

   nums.sort((a,b) => a - b);

   let count = 0, j = nums.length - 1;

   for (let i = 0; i < nums.length && nums[i]*2 <= target; i++) 
   {
       while (j && nums[j] + nums[i] > target) 
       j--;

       count = (count + arr[j - i])%mod;
   }
   return count; 
};