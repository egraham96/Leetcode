

//Approach: Multiset and Bucket Sort
var frequencySort = function(s) {
    let counts = new Map();
    
    for (const char of s) {
        if (!counts.has(char)) counts.set(char, 0);
        counts.set(char, counts.get(char) + 1);
    }
    
    const buckets = new Array(s.length);
    
    for (let i = 0; i <= s.length; i++) {
        buckets[i] = [];
    }
    
    for (const [char, count] of counts) {
        buckets[count].push(char);
    }
    
    let str = "";
    
    for (let i = buckets.length - 1; i >= 0; i--) {
        while (buckets[i].length > 0) {
            const char = buckets[i].pop();
            str += char.repeat(i);
        }
      
    }
    
    return str;
};
var s = "tree"
frequencySort(s)

/*Let n be the length of the input String. The k (number of unique characters in the input String that 
we considered for the last approach makes no difference this time)*/
/*Time Complexity: O(n).Like before, the HashMap building has a cost of O(n). The bucket sorting is O(n), because inserting items has a cost 
of O(k) (each entry from the HashMap), and building the buckets initially has a worst case of O(n) (which occurs when k = 1). Because k ≤ n, we're left with O(n).
So in total, we have O(n).
It'd be impossible to do better than this, because we need to look at each of the nn characters in the input String at least once.*/
/*Space Complexity: O(n). Same as above. The bucket Array also uses O(n) space, because its length is at most n, and there are k items across all the buckets.*/