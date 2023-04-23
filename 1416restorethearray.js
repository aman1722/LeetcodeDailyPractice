var numberOfArrays = function(s, k) {
    var n = s.length;
   var dp = new Array(n+1).fill(0); 
   var char = s.split("");
   dp[n]=1;
   var mod = 1000000007;
   for(var i=n-1; i>=0 ;i--){
       if(char[i]=='0'){

           continue;
       }
       var str=""; 
       str = str+char[i]; 
       var j=i+1; 
       while(j<=n && parseInt(str) <= k){ 
           dp[i]+=dp[j];
           dp[i]%= mod;
           if(j<n){
               str = str+char[j];
           }
           j++;
       }
   }
   return parseInt(dp[0]); 
};