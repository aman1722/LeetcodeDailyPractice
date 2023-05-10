var generateMatrix = function(n) {
    let matrix=[],count=0,x=0,y=0;
     const maxElements=n*n;
 
     for(let i=0; i<n;i++)
     {
         matrix[i]= new Array()
     }
 
     while(maxElements>count)
     {
         for(let i=x; maxElements>count && i<n-x;i++)
         {
             count++;
             matrix[y][i]=count
             // console.log(1, matrix[y][i])
         }
         y++;
 
         for(let i=y; maxElements>count && i<n-(y-1);i++)
         {
             count++;
             matrix[i][(n-1) - x]=count;
             // console.log(2, matrix[i][(n-1) - x])
         }
         x++;
 
         for(let i=(n-1)-x; maxElements>count && i>=x-1; i--)
         {
             count++;
             matrix[(n-1)-(y-1)][i]=count;
             // console.log(3, matrix[(n-1)-(y-1)][i])
         }
 
         for(let i=(n-1)-y; maxElements>count && i>=y; i--)
         {
             count++;
             matrix[i][x-1]=count
             // console.log(4, matrix[i][x-1])
         }
     }
     return matrix; 
 };