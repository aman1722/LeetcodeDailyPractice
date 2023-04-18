var mergeAlternately = function(word1, word2) {
    let res="";
    let i=0;
    let j=0;
    let e1=word1.length-1;
    let e2 = word2.length-1;
    while(i<=e1 && j<=e2){
        res+=word1[i++];
        res+=word2[j++];
    }
    while(i<=e1){
       res+=word1[i++]; 
    }
    while(j<=e2){
        res+=word2[j++];
    }
    return res;
};