var stoneGameII = function(piles) {
    var n = piles.length;
  var arr = new Array(n+1).fill(0).map(el=>new Array(n+1).fill(0));
  var sum = new Array(n).fill(0);
  for(var i = n-1; i>=0 ; i--){
      if(i == n-1) sum[i] = piles[i];
      else sum[i] = piles[i] + sum[i+1];
  }
  for(var i=n-1;i>=0;i--){
      for(var m=1;m<=n; m++){
          for(var x=1; x<=2*m && i+x<=n; x++) {
              arr[i][m] = Math.max(arr[i][m], sum[i]-arr[i+x][Math.max(m,x)]);
          }
      }
  }
  return arr[0][1];   
};