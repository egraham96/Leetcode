

var deleteDuplicates = function(head) {
    var current = head;
    
    while(current) {
        if(current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};
var head = [1,1,2,3,3];
deleteDuplicates(head);
//Time Complexity: O(n), because each node in the list is checked exactly once to determine if it is a duplicate or not, the total run time is O(n), where n is the number of nodes in the list.
//Space Complexity: O(1). No additional space is used.