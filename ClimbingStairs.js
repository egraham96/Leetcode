

//Approach 1: Fibonacci
var climbStairs = function(n) {    
    let prev = 0;
    let cur = 1;
    let temp;
    
    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = cur;
        cur += temp; 
    }
    return cur;
};
/*Time Complexity : O(n). Single loop up to n is required to calculate nth fibonacci number..*/
// Space Complexity: O(1) Constant space is used.


/*Approach 2: Dynamic Programming
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
var n=40;
climbStairs(n);
/*Time Complexity : O(n). Single loop upto n.*/
/*Space Complexity : O(n). dp array of size n is used.
*/


