

//Approach: Use Hash Map. Not the most optimal solution.
function longestPalindrome(words){
    let length = 0;
    const map = new Map();

    for (let word of words) {
        const backward = word[1] + word[0];
        const count = map.get(backward);

        if (count) {
            map.set(backward, count - 1);
            length += 4;
        } else {
            map.set(word, (map.get(word) || 0) + 1);
        }
    }

    if (Array.from(map).some(([word, count]) => count === 1 && word[0] === word[1])) {
        length += 2;
    }

    return length;
};
var words = ["ab","ty","yt","lc","cl","ab"];
longestPalindrome(words)
//Let n be the number of words in the input array and Σ be the size of the English alphabet, 26.*/
/* Time Complexity: O(n+ min(n,Σ^2)). We count the words in O(n) time (assuming one operation with a hash map takes O(1) time). Calculating the answer after that takes O(min (n, Σ^2))
time as we iterate all hash map elements, and the size of the hash map is O(min (N, Σ^2).*/
/* Space Complexity: O(n+ min(n,Σ^2)). There can be up to Σ^2 distinct words of two letters (Σ options for the first letter and Σ options for the second one). Also, the total number of words is n.*/