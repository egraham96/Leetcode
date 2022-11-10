

//Approach: Using Hash Map (Max or Min Heap is Most Efficient)
var topKFrequent = function(words, k) {
    let map = {}

    for(let word of words) {
        if(!map[word]) {
            map[word] = 1
        } else {
            map[word]++
        }
    }

    // O(nlogn) where n is number of words
    let sorted = Object.keys(map).sort((a,b) => {
        if(map[a] == map[b]) {
            return a > b ? 1 : -1
        } else {
            return map[b] - map[a]
        }
    })

    return sorted.slice(0, k);
};
var words = ["i","love","leetcode","i","love","coding"]
var k = 2;
topKFrequent(words, k)
/*Time Complexity : O(n log n). We count the frequency of each word in O(n) time, and then we sort the given words in O(n log n) time.*/
/*Space Complexity : O(n), the space used to store frequencies in a HashMap and return a slice from a sorted list of length O(n).*/