

//Approach: Using a Monotonic Stack
var StockSpanner = function() {
    this.stack = []
};

StockSpanner.prototype.next = function(price) {
    if(this.stack.length === 0) {
        
        this.stack.push([price,1]);
        return 1;

    } else {
        let span = 1; 
        
        while(this.stack.length &&  this.stack[this.stack.length-1][0] <= price ) {
            
            let item = this.stack.pop(); 
            span = span + item[1]; 
            
        }  
        this.stack.push([price,span]);
        return span ;
    }
   
};
var input= ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
// Time Complexity: Each call to next has a time complexity of O(1). n is the amount of times next is called. 
/*Even though there is a while loop in next, that while loop can only run n times total across the entire algorithm. Each element can only be popped off the stack once, and there are up to n elements. */
// Space Complexity: O(n). In the worst case scenario for space (when all the stock prices are decreasing), the while loop will never run, which means the stack grows to a size of n.