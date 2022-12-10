

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
        if (priceYesterday < priceToday) profit += priceToday - priceYesterday;
    }
    return profit;
};
var prices = [7, 1, 5, 3, 6, 4]
maxProfit(prices)
/*The Time Complexity of Approach 1 is O(n), single pass through array.*
/*The Space Complexity of Approach 1 is O(1).*/
        