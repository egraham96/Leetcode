

//Approach 2: Using Hash Map

var Logger = function() {
    this.map = new Map()  
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
     if (this.map.has(message)) {        
        if (timestamp < this.map.get(message) + 10) {
            return false
        }
    }
    
    this.map.set(message, timestamp)
    return true  
};
    
/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
/*Time Complexity: O(1). The lookup and update of the hashtable takes a constant time.*/
/*Space Complexity: O(N). where N is the size of all incoming messages. Over the time, the hashtable would have an entry for each unique message that has appeared.*/