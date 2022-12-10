

//Approach: Fast and Slow Pointers
var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
var head = [1,2,3,4,5]
middleNode(head)
// Time Complexity: O(n), where n is the number of nodes in the given list.
// Space Complexity: O(1), the space used by slow and fast.