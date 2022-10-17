

//Approach: Dynamic Programming
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


//Approach 2: Recursion with Memoization 
var climbStairsRecursion = function(num, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
};
var num=35;
climbStairsRecursion(num)
/*Time Complexity : O(n). The size of the recursion tree can go up to n.*/
// Space Complexity: O(n). The depth of recursion tree can go up to n.
