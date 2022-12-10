

/*Approach: To check if a number is ugly, we keep dividing the number by 2,3 or 5 until it becomes 1.
If the number cannot become 1 (no longer or never divisible by 2,3,5), then return false.*/
var isUgly = function(num) {
    if (!num) return false;
    while (num > 1) {
        if (num % 2 == 0) num /= 2;
        else if (num % 3 == 0) num /= 3;
        else if (num % 5 == 0) num /= 5;
        else return false;
    }
    return num == 1;
};
var n = 14;
isUgly(n)
/*Let n be the magnitude of the input integer.*/
/*Time Complexity: O(log(n)).We are dividing the integer by 2, 3, and 5 and terminating when it is not divisible by any of them.
When dividing an integer x by y, there can be at most O(log_y(x)) divisions. Assume we perform the division by 2 for k times. Then, we can say that the 
number n is at least 2^K, which means 2^k <= N. Therefore, k <= log_2 n. Thus, there can be at most log_2(n) divisions by 2, 
log_3(n)divisions by 3 and log_5(n) divisions by 5. Thus, total number of divisions will be at most log_2(n) + log_3(n) + log_5(n), 
which is O(log(n)). */
// Space Complexity: O(1). We are not using any extra space. //