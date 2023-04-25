var SmallestInfiniteSet = function() {
    this.s = Array(1000).fill(0).map((_,i) => i +1);
};


SmallestInfiniteSet.prototype.popSmallest = function() {
    const res = this.s[0];
    this.s.splice(0,1);
    return res;
};


SmallestInfiniteSet.prototype.addBack = function(num) {
    for(let i=0; i < this.s.length; i++){
        const val = this.s[i]
        if(val ===num){
            break;
        }else if(val > num){
            this.s.splice(i,0,num);
            break;
        }
    }   
};